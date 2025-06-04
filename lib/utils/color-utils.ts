/**
 * Parses an HSL color string to RGB values
 * @param hslString HSL color string (format: "hsl(h s% l%)")
 * @returns RGB color object
 */
export const parseHslToRgb = (hslString: string) => {
  // Parse HSL string (format: "hsl(h s% l%)")
  const match = hslString.match(/hsl$$(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$$/)
  if (!match) return { r: 255, g: 123, b: 0 } // Default orange if parsing fails

  const h = Number.parseFloat(match[1]) / 360
  const s = Number.parseFloat(match[2]) / 100
  const l = Number.parseFloat(match[3]) / 100

  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

/**
 * Converts RGB values to a CSS color string
 * @param r Red component (0-255)
 * @param g Green component (0-255)
 * @param b Blue component (0-255)
 * @param a Alpha component (0-1)
 * @returns CSS color string
 */
export const rgbToString = (r: number, g: number, b: number, a = 1) => {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

/**
 * Interpolates between two colors
 * @param color1 First color in RGB format
 * @param color2 Second color in RGB format
 * @param factor Interpolation factor (0-1)
 * @returns Interpolated color
 */
export const interpolateColors = (
  color1: { r: number; g: number; b: number },
  color2: { r: number; g: number; b: number },
  factor: number,
) => {
  return {
    r: Math.round(color1.r + factor * (color2.r - color1.r)),
    g: Math.round(color1.g + factor * (color2.g - color1.g)),
    b: Math.round(color1.b + factor * (color2.b - color1.b)),
  }
}

