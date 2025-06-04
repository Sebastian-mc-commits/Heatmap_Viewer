import { MergedGridPoints } from "@/lib/interfaces/api/IGridAPIResponse"
import { MarkerStyle } from "@/lib/interfaces/api/IHeatMapAPIResponse"
import calculateKeywordPerformance, { KeywordPerformance } from "@/lib/utils/calculateKeywordPerformance"
import calculatePerformanceMetrics from "@/lib/utils/calculatePerformanceMetrics"
import calculateRankDistribution from "@/lib/utils/calculateRankDistribution"
import generateMapIcon from "@/lib/utils/mapIcons/SVGIcons"
import { useGoogleMaps } from "@/providers/google-maps-provider"
import { useEffect, useRef, useState } from "react"
import { numberToIcon } from "@/lib/utils/mapIcons/fantasyIcons"
import updateMapMarkerZoom from "@/lib/utils/map-handlers/updateMapMarkerZoom"
import { IReportItem } from "@/lib/interfaces/api/IReportItemAPIResponse"

export interface IUseMapParams {
  marker_style: MarkerStyle;
  grid_analysis_base: MergedGridPoints;
  reportItem: IReportItem;
}

function useHeatMap({ marker_style, grid_analysis_base, reportItem }: IUseMapParams) {

  const mapRef = useRef<HTMLDivElement>(null)

  const { isLoaded, google, error } = useGoogleMaps()

  console.log("Google maps error: ", error)
  const [keywordPerformance, setKeywordPerformance] = useState<KeywordPerformance[]>([])
  const [performanceMetrics, setPerformanceMetrics] = useState({
    avgRank: 0,
    visibilityScore: 0,
    highRelevance: 0,
    mediumRelevance: 0,
    lowRelevance: 0,
  })
  const [rankDistribution, setRankDistribution] = useState({
    "1-5": 0,
    "6-10": 0,
    "11-15": 0,
    "16-20": 0,
    "20+": 0,
  })

  useEffect(() => {
    if (isLoaded && google && mapRef.current && reportItem?.grid_points) {

      const markers: google.maps.Marker[] = []
      const bounds = new google.maps.LatLngBounds()
      grid_analysis_base.grid_points.forEach((point) => {
        bounds.extend(new google.maps.LatLng(point.lat, point.lng))
      })


      const mapInstance = new google.maps.Map(mapRef.current, {
        zoom: 17,
        center: bounds.getCenter(),
        styles: [
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e8eef4" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f7fa" }],
          },
        ],
      })

      grid_analysis_base.grid_points.forEach((point, index) => {

        const iconStyle = marker_style === "CUSTOM" ? encodeURIComponent(generateMapIcon(point.final_rank))
          :
          `/icons/heatmap/SVG-icons/${numberToIcon(point.final_rank)}.svg`

        const marker = new google.maps.Marker({
          position: { lat: point.lat, lng: point.lng },
          map: mapInstance,
          animation: google.maps.Animation.DROP,
          title: `Location ${index + 1}`,
          icon: {
            url: iconStyle,
            scaledSize: new google.maps.Size(50, 50),
            anchor: new google.maps.Point(25, 50),
          },
        })


        let keywordsContent = ""
        point.data.forEach((item) => {
          keywordsContent += `
            <p style="margin: 0 0 3px;">
              <strong>${item.keyword}:</strong>
              Rank ${item.location_rank.rank},
              Keyword relevance: ${item.location_rank.percentage}%
            </p>
          `
        })

        const infoContent = `
          <div style="padding: 10px; max-width: 200px; font-size: 12px; font-family: 'Inter', sans-serif;">
            <h3 style="margin: 0 0 8px; font-weight: bold; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">Location ${index + 1}</h3>
            <div style="margin-bottom: 8px;">
              ${keywordsContent}
            </div>
            <p style="margin: 0 0 5px;"><strong>Avg Percentage:</strong> ${point.average_percentage}%</p>
            <p style="margin: 0 0 5px;"><strong>Final Rank:</strong> ${point.final_rank}</p>
            <p style="margin: 0;"><strong>Coordinates:</strong> ${point.lat.toFixed(6)}, ${point.lng.toFixed(6)}</p>
          </div>
        `

        const infoWindow = new google.maps.InfoWindow({
          content: infoContent,
          maxWidth: 250,
        })

        marker.addListener("click", () => {
          infoWindow.open(mapInstance, marker)
        })

        marker.setAnimation(google.maps.Animation.BOUNCE)

        if (marker_style === "STANDARD") {
          marker.set("originalIcon", iconStyle)
          markers.push(marker)
        }
      })

      bounds.extend(new google.maps.LatLng(bounds.getNorthEast().lat() + 0.003, bounds.getNorthEast().lng() + 0.003))
      bounds.extend(new google.maps.LatLng(bounds.getSouthWest().lat() - 0.003, bounds.getSouthWest().lng() - 0.003))
      mapInstance.fitBounds(bounds)

      if (marker_style === "STANDARD") {

        mapInstance.addListener("zoom_changed", () => {

          updateMapMarkerZoom(mapInstance, markers)
        })
      }


      const center = bounds.getCenter()
      const radiusStep = 0.008
      const numCircles = 10

      for (let i = 1; i <= numCircles; i++) {
        const radius = i * radiusStep
        new google.maps.Circle({
          strokeColor: "#f97316",
          strokeOpacity: 0.3,
          strokeWeight: 1,
          fillOpacity: 0,
          map: mapInstance,
          center: center,
          radius: radius * 111000,
        })
      }


      const keywordPerf = calculateKeywordPerformance(grid_analysis_base)
      const metrics = calculatePerformanceMetrics(grid_analysis_base, reportItem)
      const distribution = calculateRankDistribution(grid_analysis_base)

      setKeywordPerformance(keywordPerf)
      setPerformanceMetrics(metrics)
      setRankDistribution(distribution)
    }
  }, [isLoaded, google, reportItem])

  return {
    keywordPerformance,
    performanceMetrics,
    rankDistribution,
    mapRef
  }
}

export default useHeatMap