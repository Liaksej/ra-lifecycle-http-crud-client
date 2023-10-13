import { Dispatch } from "react";
import { Action, Note as NoteType } from "@/app/page";
import { Note } from "@/components/Note";

interface NotesProps {
  state: {
    notes: NoteType[];
  };
  dispatch: Dispatch<Action>;
  service: string;
}

const NOTES_NAME = "Notes";

export const Notes = ({ state, dispatch, service }: NotesProps) => {
  return (
    <div>
      <h1>{NOTES_NAME}</h1>
      <div className="w-7/8 mx-auto flex flex-wrap gap-6 justify-center">
        {state.notes &&
          state.notes.length > 0 &&
          state.notes.map((note: NoteType) => (
            <Note
              key={note.id}
              note={note}
              dispatch={dispatch}
              service={service}
            />
          ))}
      </div>
    </div>
  );
};
