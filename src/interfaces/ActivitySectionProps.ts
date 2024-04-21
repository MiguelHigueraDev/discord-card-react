import { Party } from "./Party";

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
