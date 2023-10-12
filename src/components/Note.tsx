import { Note as NoteType } from "@/app/page";

interface NoteProps {
  note: NoteType;
}

export const Note = ({ note }: NoteProps) => {
  return <div>{note.content}</div>;
};
