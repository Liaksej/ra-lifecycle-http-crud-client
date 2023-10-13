"use client";

import { Notes } from "@/components/Notes";
import { FormForNote } from "@/components/FormForNote";
import { Dispatch, useEffect, useReducer } from "react";

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

const SERVER_ENDPOINT =
  "https://ra-lifecycle-http-crud-server.vercel.app/notes";

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "RETRIEVE_NOTES":
      return { ...state, notes: [...action.payload] };
    default:
      return state;
  }
}

export function retriveNotes(dispatch: Dispatch<Action>) {
  fetch(SERVER_ENDPOINT)
    .then((res) => res.json())
    .then((data: Note[]) => {
      console.log(data);
      if (data) {
        dispatch({
          type: "RETRIEVE_NOTES",
          payload: data,
        });
      }
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { notes: [] });

  useEffect(() => {
    retriveNotes(dispatch);
  }, []);

  return (
    <>
      <Notes state={state} dispatch={dispatch} service={SERVER_ENDPOINT} />
      <FormForNote dispatch={dispatch} service={SERVER_ENDPOINT} />
    </>
  );
}
