import { IconButton, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Dispatch, FormEvent, useRef } from "react";
import { Action } from "@/app/page";
import { retrieveNotes } from "@/utils/retrieveNotes";

interface FormForNoteProps {
  dispatch: Dispatch<Action>;
  service: string;
}

function postNote(
  service: string,
  content: string | null,
  dispatch: Dispatch<Action>,
) {
  fetch(service, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ content: content }),
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

export const FormForNote = ({ dispatch, service }: FormForNoteProps) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(
    e: FormEvent<HTMLFormElement>,
    dispatch: Dispatch<Action>,
  ) {
    e.preventDefault();

    if (!contentRef.current?.value) {
      return;
    }

    postNote(service, contentRef.current.value, dispatch);

    contentRef.current.value = "";
    contentRef.current.focus();
  }

  return (
    <form
      className="w-96 mx-auto pt-16 rel"
      onSubmit={(e) => submitHandler(e, dispatch)}
    >
      <TextareaAutosize
        className="w-96 border-2 resize-none"
        minRows={3}
        ref={contentRef}
      />
      <IconButton size="small" className="abs form-button" type="submit">
        <SendIcon />
      </IconButton>
    </form>
  );
};
