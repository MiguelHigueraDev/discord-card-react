import { useRef } from "react";
import useAutosizeTextArea from "../hooks/useAutosizeTextArea";
const MessageSection = ({
  message = "",
  placeholder,
  accentColor,
  handleInput,
}: {
  message?: string;
  placeholder?: string;
  accentColor?: string;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(messageRef.current, message);

  return (
    <section className="message-section">
      <textarea
        ref={messageRef}
        placeholder={placeholder ? placeholder : "Message this user"}
        value={message}
        onChange={handleInput}
        style={{ border: `0.5px solid ${accentColor ? accentColor : "#ccc"}` }}
      />
    </section>
  )
};

export default MessageSection;
