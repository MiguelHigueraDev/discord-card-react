// =============================================================================
// Basic Types and Enums
// =============================================================================

export type ActivityPriority = "spotify" | "activity" | "default" | "none";
export type ConnectionStatus = "online" | "dnd" | "idle" | "offline";

// =============================================================================
// Core Interfaces
// =============================================================================

export interface AboutMeItem {
  text: string;
  marginBottom?: number;
  href?: string;
}

export interface Badge {
  name: string;
  iconUrl: string;
}

export interface Party {
  currentSize: number;
  maxSize: number;
}

export interface Role {
  name: string;
  color: string;
}

// =============================================================================
// Component Props Interfaces
// =============================================================================

export interface AboutMeSectionProps {
  title?: string;
  items: AboutMeItem[];
}

export interface ActivitySectionProps {
  title?: string;
  name: string;
  state?: string;
  details?: string;
  largeImage?: string;
  smallImage?: string;
  party?: Party;
  buttonText?: string;
  primaryColor?: string;
}

export interface BasicInfoSectionProps {
  displayname: string;
  username: string;
  pronouns?: string;
}

export interface MemberSinceSectionProps {
  title?: string;
  discordJoinDate: string;
  serverJoinDate?: string;
  serverIconUrl?: string;
  serverName?: string;
}

export interface MessageSectionProps {
  message?: string;
  placeholder?: string;
  accentColor?: string;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface NoteSectionProps {
  title?: string;
  note?: string;
  placeholder?: string;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface RoleSectionProps {
  title?: string;
  roles: Role[];
}

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

export interface StatusSectionProps {
  iconUrl?: string;
  status: string;
}

// =============================================================================
// Lanyard-specific Interfaces
// =============================================================================

export interface LanyardActivitySectionProps {
  title?: string;
  show?: boolean;
  showElapsedTime?: boolean;
  timeElapsedText?: string;
  timeAlignment?: "left" | "right";
}

export interface LanyardSpotifySectionProps {
  // Controls Spotify section visibility
  show?: boolean;
  title?: string;
  buttonText?: string;
  byText?: string;
  onText?: string;
}
