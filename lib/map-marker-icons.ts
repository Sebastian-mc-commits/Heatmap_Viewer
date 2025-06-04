import { colors } from "@/data/marker-colors"

export const mapXIcon = (number: number, color = colors.darkRed) => {
  return `
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="xShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" flood-opacity="0.3" />
        </filter>
      </defs>

      <!-- Ultra-Wide "X" -->
      <path d="M20 20 L120 120 M120 20 L20 120"
            stroke="#E74C3C"
            stroke-width="36"
            stroke-linecap="round"
            filter="url(#xShadow)"/>

      <!-- Circle Card for the Number -->
      <circle cx="70" cy="70" r="30" fill="#C0392B" stroke="#A93226" stroke-width="3" filter="url(#xShadow)"/>

      <!-- Number inside the Circle -->
      <text x="70" y="74" text-anchor="middle" dominant-baseline="middle" fill="#FFD6D6" font-family="Arial, sans-serif" font-weight="bold" font-size="28">${number}</text>
    </svg>
  `
}

export const mapFlagIcon = (number: number, color = colors.red) => {
  return `
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="flagShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" flood-opacity="0.3" />
        </filter>
      </defs>

      <!-- Flag Pole (Thicker & Taller) -->
      <rect x="25" y="10" width="12" height="150" fill="${color.stroke}" rx="6" ry="6"/>

      <!-- Squarer Curved Flag -->
      <path d="M37 10
              Q100 5 110 30
              Q100 55 37 50
              Z"
            fill="${color.fill}"
            stroke="${color.stroke}"
            stroke-width="3"
            filter="url(#flagShadow)"/>

      <!-- Number inside the Flag (Perfectly Centered) -->
      <text x="68" y="32" text-anchor="middle" dominant-baseline="middle" fill="${color.textFill}" font-family="Arial, sans-serif" font-weight="bold" font-size="26">${number}</text>
    </svg>
  `
}

export const mapMarkIcon = (number: number, color = colors.lilaGreen) => {
  const twoDigit = `
    <svg width="73" height="109.5" viewBox="0 0 73 109.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="markerShadow" x="-20%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-opacity="0.25" />
        </filter>
        <filter id="circleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.3" />
        </filter>
      </defs>

      <!-- Map Marker Shape -->
      <path d="M36.5 109.5
              C25 90, 7 67, 7 43
              C7 20 22 7 36.5 7
              C51 7 66 20 66 43
              C66 67 48 90 36.5 109.5
              Z"
            fill="${color.fill}"
            filter="url(#markerShadow)" />

      <!-- Adjusted Circle for Multi-Digit Numbers -->
      <circle cx="36.5" cy="38" r="24" fill="${color.circleFill}" filter="url(#circleShadow)" stroke="${color.circleStroke}" stroke-width="2.5" />

      <!-- Number inside (supports 10-99) -->
      <text x="50%" y="40" text-anchor="middle" dominant-baseline="middle" fill="${color.textFill}" font-family="Arial, sans-serif" font-weight="bold" font-size="28">${number}</text>
    </svg>
  `

  const oneDigit = `
    <svg width="73" height="109.5" viewBox="0 0 73 109.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="markerShadow" x="-20%" y="-10%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-opacity="0.25" />
        </filter>
        <filter id="circleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.3" />
        </filter>
      </defs>

      <!-- Map Marker Shape -->
      <path d="M36.5 109.5
              C25 90, 7 67, 7 43
              C7 20 22 7 36.5 7
              C51 7 66 20 66 43
              C66 67 48 90 36.5 109.5
              Z"
            fill="${color.fill}"
            filter="url(#markerShadow)" />

      <!-- Elegant outline -->
      <path d="M36.5 107.5
              C26 89, 9 66, 9 43
              C9 22 24 9 36.5 9
              C49 9 64 22 64 43
              C64 66 47 89, 36.5 107.5
              Z"
            stroke="${color.stroke}" stroke-width="3" fill="none"/>

      <!-- Circle for number -->
      <circle cx="36.5" cy="38" r="22" fill="${color.circleFill}" filter="url(#circleShadow)" stroke="${color.circleStroke}" stroke-width="2.5" />

      <!-- Number inside -->
      <text x="50%" y="42" text-anchor="middle" dominant-baseline="middle" fill="${color.textFill}" font-family="Arial, sans-serif" font-weight="bold" font-size="40">${number}</text>
    </svg>
  `

  return number > 9 ? twoDigit : oneDigit
}

export const getSVGIcon = (rankType: number) => {
  switch (rankType) {
    case 1:
    case 2:
      return mapMarkIcon(rankType, colors.neonGreen)
    case 3:
      return mapMarkIcon(rankType, colors.lightGreen)
    case 4:
      return mapMarkIcon(rankType, colors.lilaGreen)
    case 5:
    case 6:
    case 7:
    case 8:
      return mapMarkIcon(rankType, colors.yellow)
    case 9:
    case 10:
      return mapMarkIcon(rankType, colors.darkYellow)
    case 11:
    case 12:
      return mapMarkIcon(rankType, colors.orange)
    case 13:
    case 14:
    case 15:
      return mapMarkIcon(rankType, colors.red)
    case 16:
    case 17:
    case 18:
    case 19:
      return mapFlagIcon(rankType, colors.darkRed)
    default:
      return mapXIcon(rankType, colors.darkRed)
  }
}

export const createCustomMarkerIcon = (rank: number) => {
  if (typeof window === "undefined" || !window.google) return null

  const svgString = getSVGIcon(rank)
  const url = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString)}`

  return {
    url,
    scaledSize: new window.google.maps.Size(40, 40),
    anchor: new window.google.maps.Point(20, 40),
  }
}

