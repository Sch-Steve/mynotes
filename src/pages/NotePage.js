import React from "react";
import { useParams } from "react-router-dom";
import notes from "../assets/data";

function NotePage() {
  let { id } = useParams();

  let note = notes.find((note) => note.id == id);

  return (
    <div className="note">
        <div className="note-header">

        </div>

        <textarea value={note?.body}></textarea>
      <p>{note?.body}</p>
    </div>
  );
}

export default NotePage;
