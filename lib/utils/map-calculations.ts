export function calculateTotalGridSpacing(gridSize: string, spacingKm: number, unit: string) {
  const size = Number.parseInt(gridSize.split("x")[0])
  const totalSpacing = size * spacingKm
  return `${totalSpacing.toFixed(1)} ${unit === "kilometers" ? "km" : "mi"} × ${totalSpacing.toFixed(1)} ${unit === "kilometers" ? "km" : "mi"}`
}

export function calculateGridArea(gridSize: string, spacingKm: number, unit: string) {
  const size = Number.parseInt(gridSize.split("x")[0])
  const area = size * size * spacingKm * spacingKm
  return `${area.toFixed(2)} ${unit === "kilometers" ? "km²" : "mi²"}`
}

export function getMapZoomLevel(gridSize: string, spacingKm: number) {
  const size = Number.parseInt(gridSize.split("x")[0])
  const totalSpacing = size * spacingKm

  // Approximate zoom level calculation
  if (totalSpacing > 20) return 10
  if (totalSpacing > 10) return 12
  if (totalSpacing > 5) return 13
  if (totalSpacing > 2) return 14
  return 15
}

