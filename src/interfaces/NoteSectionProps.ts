export interface NoteSectionProps {
    title?: string;
    note?: string;
    placeholder?: string;
    handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}