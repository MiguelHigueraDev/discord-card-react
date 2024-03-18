import { Party } from "./Party";

export interface GameSectionProps {
  title?: string;
  name: string;
  state?: string;
  details?: string;
  largeImage?: string;
  smallImage?: string;
  party?: Party;
}
