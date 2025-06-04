
const BASE_SIZE = 180;
const ZOOM_THRESHOLD = 16;
const SCALE_PER_LEVEL = 15;
const MIN_MARKER_SIZE = 30;

let modifiedMarkers: google.maps.Marker[] = [];

function updateMapMarkerZoom(map: google.maps.Map, markers: google.maps.Marker[]): void {
  const currentZoom = map.getZoom();

  if (currentZoom === undefined) {
    console.warn("Current zoom is undefined.");
    return;
  }

  const bounds = map.getBounds();

  if (!bounds) {
    console.warn("Map bounds are not available.");
    return;
  }

  if (currentZoom >= ZOOM_THRESHOLD) {
    const size = new google.maps.Size(BASE_SIZE, BASE_SIZE);
    const anchor = new google.maps.Point(BASE_SIZE / 2, BASE_SIZE);

    modifiedMarkers.forEach(marker => {
      const iconUrl = marker.get("originalIcon") as string | undefined;
      if (!iconUrl) {

        return;
      }

      marker.setIcon({
        url: iconUrl,
        scaledSize: size,
        anchor: anchor,
      });
    });

    modifiedMarkers = [];
    return;
  }

  const zoomOffset = currentZoom - ZOOM_THRESHOLD;

  const calculatedNewSizeValue = BASE_SIZE + zoomOffset * SCALE_PER_LEVEL;
  const newSizeValue = Math.max(MIN_MARKER_SIZE, calculatedNewSizeValue);

  const newSize = new google.maps.Size(newSizeValue, newSizeValue);
  const newAnchor = new google.maps.Point(newSizeValue / 2, newSizeValue);

  const newModifiedMarkers: google.maps.Marker[] = [];


  for (const marker of markers) {
    const pos = marker.getPosition();

    if (!pos || !bounds.contains(pos)) {
      continue;
    }

    const iconUrl = marker.get("originalIcon") as string | undefined;
    if (!iconUrl) {

      continue;
    }

    marker.setIcon({
      url: iconUrl,
      scaledSize: newSize,
      anchor: newAnchor,
    });


    newModifiedMarkers.push(marker);
  }

  modifiedMarkers = newModifiedMarkers;
}

export default updateMapMarkerZoom