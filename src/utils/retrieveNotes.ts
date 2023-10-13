import { Dispatch } from "react";
import { Action, Note } from "@/app/page";
import exp from "constants";

export const SERVER_ENDPOINT =
  "https://ra-lifecycle-http-crud-server.vercel.app/notes";

export function retrieveNotes(dispatch: Dispatch<Action>) {
  fetch(SERVER_ENDPOINT)
    .then((res) => res.json())
    .then((data: Note[]) => {
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
