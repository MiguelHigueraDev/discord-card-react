import { useRef } from "react";
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";
import styles from "../../styles/MessageSection.module.css";
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
    <section className={styles.section}>
      <textarea
        ref={messageRef}
        placeholder={placeholder ? placeholder : "Message this user"}
        value={message}
        onChange={handleInput}
        className={styles.textarea}
        style={{
          border: `0.5px solid ${accentColor ? accentColor : "#ccc"}`,
          padding: "0.75rem",
          resize: "none",
        }}
      />
    </section>
  );
};

export default MessageSection;
