import { ReactNode } from "react";

interface NotesProps {
  children: ReactNode;
}

export const Notes = ({ children }: NotesProps) => {
  return (
    <>
      <div>
        <h1>{}</h1>
        <div></div>
      </div>
      {children}
    </>
  );
};
