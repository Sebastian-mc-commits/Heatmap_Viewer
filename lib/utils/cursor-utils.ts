export const PIN_CURSOR_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%23ff7b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
`

export function getPinCursorStyle() {
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(PIN_CURSOR_SVG)}") 16 16, auto`
}

