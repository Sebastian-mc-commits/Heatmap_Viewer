import { type DistanceUnit, MILES_TO_KM, KM_TO_MILES } from "@/lib/types/map-types"

export function convertDistance(value: number, from: DistanceUnit, to: DistanceUnit): number {
  if (from === to) return value
  return from === "km" ? value * KM_TO_MILES : value * MILES_TO_KM
}

export function formatDistance(value: number, unit: DistanceUnit): string {
  return `${value.toFixed(1)} ${unit === "km" ? "km" : "mi"}`
}

export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: DistanceUnit = "km",
): number {
  const R = unit === "km" ? 6371 : 3958.8
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(value: number): number {
  return (value * Math.PI) / 180
}

const toDegrees = (radians: number): number => radians * 180 / Math.PI;

export function calculateGridPoints(
  centerLat: number,
  centerLng: number,
  gridSize: number,
  spacingValue: number,
  shape: "square" | "circle",
  unit: DistanceUnit = "km",
): Array<{ lat: number; lng: number }> {
  const points: Array<{ lat: number; lng: number }> = [];
  const spacingMeters = unit === "km" ? spacingValue * 1000 : spacingValue * 1609.34;

  const R = 6371000;

  if (shape === "square") {

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {



        const dx = (j - (gridSize - 1) / 2) * spacingMeters;
        const dy = (i - (gridSize - 1) / 2) * spacingMeters;





        if (dx === 0 && dy === 0) {
          continue;
        }

        const distance = Math.sqrt(dx * dx + dy * dy);
        const bearing = Math.atan2(dy, dx);

        const lat1Rad = toRad(centerLat);
        const lng1Rad = toRad(centerLng);

        const lat2Rad = Math.asin(
          Math.sin(lat1Rad) * Math.cos(distance / R) +
          Math.cos(lat1Rad) * Math.sin(distance / R) * Math.cos(bearing)
        );

        const lng2Rad = lng1Rad + Math.atan2(
          Math.sin(bearing) * Math.sin(distance / R) * Math.cos(lat1Rad),
          Math.cos(distance / R) - Math.sin(lat1Rad) * Math.sin(lat2Rad)
        );

        points.push({
          lat: toDegrees(lat2Rad),
          lng: toDegrees(lng2Rad),
        });
      }
    }
  } else {


    const numConcentricCircles = Math.floor(gridSize / 2);

    if (numConcentricCircles <= 0) {


      return points;
    }

    for (let r = 1; r <= numConcentricCircles; r++) {
      const radius = r * spacingMeters;
      const circumference = 2 * Math.PI * radius;



      const pointsInThisRing = Math.max(8, Math.floor(circumference / spacingMeters));

      for (let pointIndex = 0; pointIndex < pointsInThisRing; pointIndex++) {
        const angle = (pointIndex * 2 * Math.PI) / pointsInThisRing;


        const distance = radius;
        const bearing = angle;

        const lat1Rad = toRad(centerLat);
        const lng1Rad = toRad(centerLng);

        const lat2Rad = Math.asin(
          Math.sin(lat1Rad) * Math.cos(distance / R) +
          Math.cos(lat1Rad) * Math.sin(distance / R) * Math.cos(bearing)
        );

        const lng2Rad = lng1Rad + Math.atan2(
          Math.sin(bearing) * Math.sin(distance / R) * Math.cos(lat1Rad),
          Math.cos(distance / R) - Math.sin(lat1Rad) * Math.sin(lat2Rad)
        );

        points.push({
          lat: toDegrees(lat2Rad),
          lng: toDegrees(lng2Rad),
        });
      }
    }
  }

  return points;
}