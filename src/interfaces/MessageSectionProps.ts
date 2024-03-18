export interface MessageSectionProps {
  message?: string;
  placeholder?: string;
  accentColor?: string;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
