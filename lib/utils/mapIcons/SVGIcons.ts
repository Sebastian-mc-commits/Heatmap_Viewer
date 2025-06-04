import pointColors from "@/lib/constants/colorPoints"

export const mapStarIcon = (number: number, color = pointColors.blue) => {
  return ``;
};

export const mapXIcon = (number: number, color = pointColors.red) => {
  const XIcon = `
<svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="xShadow" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="0" dy="3" stdDeviation="2" flood-opacity="0.3" />
  </filter>
</defs>

<!-- Smooth, Rounded "X" with Extended Axes -->
<path d="M15 15 L125 125 M125 15 L15 125"
      stroke="#E74C3C"
      stroke-width="22"
      stroke-linecap="round"
      stroke-linejoin="round"
      filter="url(#xShadow)"/>

<!-- Well-Balanced Circle -->
<circle cx="70" cy="75" r="40" fill="#C0392B" stroke="#A93226" stroke-width="9" filter="url(#xShadow)"/>

<!-- Clearly Visible, Well-Positioned Number -->
<text x="70" y="78" text-anchor="middle" dominant-baseline="middle" fill="#FFF"
      font-family="Arial, sans-serif" font-weight="bold" font-size="50">
${number}
</text>
</svg>
`;

  const XIconPlus = `
<svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="xShadow" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="0" dy="3" stdDeviation="2" flood-opacity="0.3" />
  </filter>
</defs>

<!-- Smooth, Rounded "X" with Extended Axes -->
<path d="M15 15 L125 125 M125 15 L15 125"
      stroke="#E74C3C"
      stroke-width="22"
      stroke-linecap="round"
      stroke-linejoin="round"
      filter="url(#xShadow)"/>

<!-- Well-Balanced Circle -->
<circle cx="70" cy="72" r="49" fill="#C0392B" stroke="#A93226" stroke-width="10" filter="url(#xShadow)"/>

<!-- Clearly Visible, Well-Positioned Number -->
<text x="75" y="78" text-anchor="middle" dominant-baseline="middle" fill="#FFF"
      font-family="Arial, sans-serif" font-weight="bold" font-size="50">
${number}+
</text>
</svg>
`;

  return number >= 20 ? XIconPlus : XIcon;
};

export const mapFlagIcon = (number: number, color = pointColors.red) => {
  return `
<svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <filter id="flagShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" flood-opacity="0.3" />
      </filter>
  </defs>

  <rect x="20" y="10" width="14" height="160" fill="#7F0000" rx="7" ry="7"/>
  <path d="M34 10
          Q150 5 130 45
          Q110 80 34 70
          Z"
        fill="#B71C1C"
        stroke="#7F0000"
        stroke-width="5"
        filter="url(#flagShadow)"/>

  <rect x="45" y="15.5" width="60" height="50" rx="8" ry="8" fill="#C62828" stroke="#7F0000" stroke-width="3" opacity="0.9"/>

  <text x="75" y="45" text-anchor="middle" dominant-baseline="middle" fill="#FFF" font-family="Arial, sans-serif" font-weight="bold" font-size="50">${number}</text>
</svg>
`;
};

const mapMarkIcon = (number: number, color = pointColors.lilaGreen) => {
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
        
  <!-- Elegant outline -->
  <path d="M36.5 107.5
          C26 89, 9 66, 9 43
          C9 22 24 9 36.5 9
          C49 9 64 22 64 43
          C64 66 47 89, 36.5 107.5
          Z"
        stroke="${color.stroke}" stroke-width="3" fill="none"/>

  <!-- Adjusted Circle for Multi-Digit Numbers -->
  <circle cx="36.5" cy="38" r="24" fill="${color.circleFill}" filter="url(#circleShadow)" stroke="${color.circleStroke}" stroke-width="2.5" />

  <!-- Number inside (supports 10-99) -->
  <text x="50%" y="40" text-anchor="middle" dominant-baseline="middle" fill="${color.textFill}" font-family="Arial, sans-serif" font-weight="bold" font-size="35">${number}</text>
</svg>
`;

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
`;

  return number > 9 ? twoDigit : oneDigit;
};

const generateMapIcon = (rankType: number) => {
  switch (rankType) {
    case 1: {
      return mapMarkIcon(rankType, pointColors.neonGreen);
    }
    case 2: {
      return mapMarkIcon(rankType, pointColors.neonGreen);
    }
    case 3: {
      return mapMarkIcon(rankType, pointColors.lightGreen);
    }
    case 4: {
      return mapMarkIcon(rankType, pointColors.lilaGreen);
    }
    case 5:
    case 6:
    case 7:
    case 8: {
      return mapMarkIcon(rankType, pointColors.yellow);
    }
    case 9:
    case 10: {
      return mapMarkIcon(rankType, pointColors.darkYellow);
    }
    case 11:
    case 12: {
      return mapMarkIcon(rankType, pointColors.darkOrange);
    }
    case 13:
    case 14:
    case 15: {
      return mapMarkIcon(rankType, pointColors.red);
    }

    case 16:
    case 17:
    case 18:
    case 19: {
      return mapFlagIcon(rankType, pointColors.darkRed);
    }

    default:
      return mapXIcon(rankType, pointColors.darkRed);
  }
};

export default generateMapIcon