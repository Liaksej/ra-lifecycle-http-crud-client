"use client";

import { Notes } from "@/components/Notes";
import { Note } from "@/components/Note";
import { FormForNote } from "@/components/FormForNote";
import { useEffect, useReducer } from "react";

export type Note = {
  id?: string;
  content?: string;
};

interface State {
  notes: Note[];
}

export type AddNoteAction = {
  type: "ADD_NOTE";
  payload: Note;
};

type RemoveNoteAction = {
  type: "REMOVE_NOTE";
  payload: Pick<Note, "id">;
};

type RetrieveNotesAction = {
  type: "RETRIEVE_NOTES";
  payload: Note[];
};

type Action = AddNoteAction | RemoveNoteAction | RetrieveNotesAction;

const SERVER_ENDPOINT =
  "https://ra-lifecycle-http-crud-server.vercel.app/notes";

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case "RETRIEVE_NOTES":
      return { ...state, notes: [...action.payload] };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { notes: [] });

  useEffect(() => {
    fetch(SERVER_ENDPOINT)
      .then((res) => res.json())
      .then((data: Note[]) => {
        console.log(data);
        if (data && data.length > 0) {
          dispatch({
            type: "RETRIEVE_NOTES",
            payload: data,
          });
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <>
      <Notes>
        {state.notes &&
          state.notes.length > 0 &&
          state.notes.map((note: Note) => <Note key={note.id} note={note} />)}
      </Notes>
      ;
      <FormForNote dispatch={dispatch} service={SERVER_ENDPOINT} />
    </>
  );
}
