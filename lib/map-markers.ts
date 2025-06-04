declare global {
  interface Window {
    google: any
  }
}

export const createMainMarkerIcon = (color = "#ff7b00") => {
  if (typeof window === "undefined" || !window.google) return null

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="${color}" fill-opacity="0.9"/>
        <circle cx="12" cy="10" r="3" fill="white"/>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(40, 40),
    anchor: new window.google.maps.Point(20, 40),
    labelOrigin: new window.google.maps.Point(20, 50),
  }
}

export const createGridMarkerIcon = (color = "#666666", opacity = 0.9) => {
  if (typeof window === "undefined" || !window.google) return null

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="${color}" fill-opacity="${opacity}"/>
        <circle cx="12" cy="10" r="3" fill="white" fill-opacity="0.7"/>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(24, 24),
    anchor: new window.google.maps.Point(12, 24),
  }
}

export const createSquareMarkerIcon = (color = "#666666", opacity = 0.9) => {
  if (typeof window === "undefined" || !window.google) return null

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" fill="${color}" fill-opacity="${opacity}"/>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(24, 24),
    anchor: new window.google.maps.Point(12, 12),
  }
}

export const createCircleMarkerIcon = (color = "#666666", opacity = 0.9) => {
  if (typeof window === "undefined" || !window.google) return null

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" fill="${color}" fill-opacity="${opacity}"/>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(24, 24),
    anchor: new window.google.maps.Point(12, 12),
  }
}

export const createCustomMarkerIcon = (rank: number, animated = false) => {
  if (typeof window === "undefined" || !window.google) return null

  // Placeholder implementation - replace with actual logic
  const color = rank > 5 ? "#FF0000" : "#00FF00"

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${color}" stroke="black" stroke-width="0.5">
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="12" text-anchor="middle" dominant-baseline="middle" font-size="8" fill="white">${rank}</text>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(24, 24),
    anchor: new window.google.maps.Point(12, 12),
    animation: animated ? window.google.maps.Animation.BOUNCE : null,
  }
}

// Add the missing createGrayMarker function
export const createGrayMarker = () => {
  if (typeof window === "undefined" || !window.google) return null

  const color = "#777777"

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="${color}" fill-opacity="0.9"/>
        <circle cx="12" cy="10" r="3" fill="white" fill-opacity="0.7"/>
      </svg>
    `)}`,
    scaledSize: new window.google.maps.Size(24, 24),
    anchor: new window.google.maps.Point(12, 24),
  }
}

