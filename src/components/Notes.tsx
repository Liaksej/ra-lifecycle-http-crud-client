import { Dispatch } from "react";
import { Action, Note as NoteType } from "@/app/page";
import { Note } from "@/components/Note";
import { Refresh } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { retrieveNotes } from "@/utils/retrieveNotes";

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
    <div className="w-3/4 mx-auto">
      <div className="flex items-baseline pb-4">
        <h1 className="self-center">{NOTES_NAME}</h1>
        <IconButton
          className=""
          aria-label="update"
          size="small"
          onClick={() => {
            retrieveNotes(dispatch);
          }}
        >
          <Refresh color="action" />
        </IconButton>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
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
