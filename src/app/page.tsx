"use client";

import { Notes } from "@/components/Notes";
import { FormForNote } from "@/components/FormForNote";
import { Dispatch, useEffect, useReducer } from "react";
import { retrieveNotes, SERVER_ENDPOINT } from "@/utils/retrieveNotes";

export type Note = {
  id?: string;
  content?: string;
};

interface State {
  notes: Note[];
}

export type Action = {
  type: "RETRIEVE_NOTES";
  payload: Note[];
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "RETRIEVE_NOTES":
      return { ...state, notes: [...action.payload] };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { notes: [] });

  useEffect(() => {
    retrieveNotes(dispatch);
  }, []);

  return (
    <>
      <Notes state={state} dispatch={dispatch} service={SERVER_ENDPOINT} />
      <FormForNote dispatch={dispatch} service={SERVER_ENDPOINT} />
    </>
  );
}
