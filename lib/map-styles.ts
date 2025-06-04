export const MapStyles = {
  light: [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ff7b00" }],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "landscape.man_made",
      elementType: "all",
      stylers: [{ lightness: "3" }],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#e6f3d6" }, { visibility: "on" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }, { visibility: "simplified" }],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#fff3e8" }, { visibility: "simplified" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text",
      stylers: [{ color: "#4e4e4e" }],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ visibility: "on" }, { lightness: 700 }],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#ffebd6" }],
    },
  ],
  dark: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#000000" }, { lightness: 13 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ff7b00" }, { lightness: 14 }, { weight: 1.4 }],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#0a0a0a" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#1c1c1c" }, { lightness: 5 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ff7b00" }, { lightness: 25 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ff7b00" }, { lightness: 16 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ color: "#ff7b00" }],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#1a1a1a" }],
    },
  ],
  // Classic Google Maps style (default)
  classic: [],
}

