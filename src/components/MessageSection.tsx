import { useRef } from "react";
import useAutosizeTextArea from "../hooks/useAutosizeTextArea";
/**
 * Generates a Discord message section with a textarea for input.
 *
 * @param {string} message - The message to display in the textarea
 * @param {string} placeholder - The placeholder text for the textarea
 * @param {string} accentColor - The color to use for the textarea border
 * @param {function} handleInput - The function to handle input changes in the textarea
 * @return {JSX.Element} The JSX element representing the message section
 */
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
    <section>
      <textarea
        ref={messageRef}
        placeholder={placeholder ? placeholder : "Message this user"}
        value={message}
        onChange={handleInput}
        className="mt-2 w-full h-[44px] rounded-lg bg-[#4b4b4b00] p-3 scrollbar-none resize-none [scrollbar-width:none] focus:outline-none text-sm"
        style={{ border: `0.5px solid ${accentColor ? accentColor : "#ccc"}` }}
      />
    </section>
  );
};

export default MessageSection;
