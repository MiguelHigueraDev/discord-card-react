import { useRef } from "react";
import useAutosizeTextArea from "../hooks/useAutosizeTextArea";
const MessageSection = ({
  message = "",
  placeholder,
  handleInput,
}: {
  message?: string;
  placeholder?: string;
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
      />
    </section>
  )
};

export default MessageSection;
