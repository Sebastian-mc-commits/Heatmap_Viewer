export interface LocationSearchResult {
  readonly id: string
  readonly name: string
  readonly address?: string
  readonly lat: number
  readonly lng: number
}

export interface MapSettings {
  readonly center: {
    readonly lat: number
    readonly lng: number
  }
  readonly zoom: number
  readonly mapTypeId: MapTypeId
}

export type DistanceUnit = "km" | "mi"

export interface MapPreferences {
  readonly distanceUnit: DistanceUnit
}

export type MapTypeId = "roadmap" | "satellite" | "hybrid" | "terrain"

// Conversion utilities
export const MILES_TO_KM = 1.60934
export const KM_TO_MILES = 0.621371

export function convertDistance(value: number, from: DistanceUnit, to: DistanceUnit): number {
  if (from === to) return value
  return from === "km" ? value * KM_TO_MILES : value * MILES_TO_KM
}

