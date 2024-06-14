import React from "react";
import notes from "../assets/data";
import ListItem from "../components/ListItem";

const NotesPage = () => {
  return (
    <div className="notes">

      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      {notes.map((note, index) => (
        <ListItem key={index} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
