export interface SpotifySectionProps {
  title?: string;
  song: string;
  artist: string;
  album: string;
  artUrl?: string;
  trackUrl?: string;
  startTimeMs?: number;
  endTimeMs?: number;
  primaryColor?: string;
  playOnSpotifyText?: string;
  byText?: string;
  onText?: string;
}
