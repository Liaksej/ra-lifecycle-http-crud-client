import { Note as NoteType, Action } from "@/app/page";
import { IconButton } from "@mui/material";
import { Dispatch } from "react";
import { Cancel } from "@mui/icons-material";
import { retrieveNotes } from "@/utils/retrieveNotes";

interface NoteProps {
  note: NoteType;
  dispatch: Dispatch<Action>;
  service: string;
}

function deleteNote(
  service: string,
  id: string | undefined,
  dispatch: Dispatch<Action>,
) {
  const url = `${service}?id=${id}`;

  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
    })
    .then(() => {
      retrieveNotes(dispatch);
    });
}

export const Note = ({ note, dispatch, service }: NoteProps) => {
  function deleteHandler() {
    deleteNote(service, note.id, dispatch);
  }

  return (
    <div className="rel w-96 border-2 h-fit">
      <IconButton
        className="abs cancel-button"
        aria-label="delete"
        onClick={() => {
          deleteHandler();
        }}
      >
        <Cancel color="disabled" />
      </IconButton>
      <div className="break-words p-2">{note.content}</div>
    </div>
  );
};
