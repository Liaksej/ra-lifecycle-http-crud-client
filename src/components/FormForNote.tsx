"use client";

import { IconButton, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Dispatch, FormEvent, useRef } from "react";
import { AddNoteAction } from "@/app/page";

interface FormForNoteProps {
  dispatch: Dispatch<AddNoteAction>;
  service: string;
}

export const FormForNote = ({ dispatch, service }: FormForNoteProps) => {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(
    e: FormEvent<HTMLFormElement>,
    dispatch: Dispatch<AddNoteAction>,
  ) {
    e.preventDefault();
    if (!contentRef.current?.value) {
      return;
    }

    fetch(service, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ content: contentRef.current.value }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.id && data.content) {
          dispatch({
            type: "ADD_NOTE",
            payload: { id: data.id as string, content: data.content as string },
          });
        } else {
        }
      });
  }

  return (
    <form onSubmit={(e) => submitHandler(e, dispatch)}>
      <TextareaAutosize ref={contentRef} />
      <IconButton type="submit">
        <SendIcon />
      </IconButton>
    </form>
  );
};
