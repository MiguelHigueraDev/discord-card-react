import { useRef } from "react";
import useAutosizeTextArea from "../hooks/useAutosizeTextArea";

/**
 * Renders a note section with a title, note content, and input field for adding notes.
 *
 * @param {string} title - The title of the note section
 * @param {string} note - The current note content
 * @param {string} placeholder - The placeholder text for the input field
 * @param {function} handleInput - The function to handle input changes
 * @return {JSX.Element} A section component with a title, note input field, and note content
 */
const NoteSection = ({
  title,
  note = "",
  placeholder,
  handleInput,
}: {
  title?: string;
  note?: string;
  placeholder?: string;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const noteRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(noteRef.current, note)

  return (
    <section className="discord-card-section discord-card-note">
      {title && <h3>{title}</h3>}
      <textarea
        placeholder={placeholder ? placeholder : "Add a note"}
        value={note}
        onInput={handleInput}
        maxLength={255}
        ref={noteRef}
        rows={1}
      ></textarea>
    </section>
  );
};

export default NoteSection;
