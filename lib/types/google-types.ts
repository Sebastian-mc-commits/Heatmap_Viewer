export interface GooglePlacesResponse {
  places: {
    displayName: { text: string };
    formattedAddress: string;
    id: string;
    location: {
      latitude: number;
      longitude: number;
    }
  }[];
}