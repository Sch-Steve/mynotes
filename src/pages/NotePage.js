import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

function NotePage() {
  let { id } = useParams();
  let navigate = useNavigate();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`http://127.0.0.1:5000/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  let updateNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  let deleteNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  let handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default Link behavior
    await updateNote();
    navigate("/"); // Navigate after the note is updated
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <a href="/" onClick={handleSubmit}>
            <ArrowLeft />
          </a>
        </h3>
        <button onClick={deleteNote}>Delete</button>
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body || ""}
      ></textarea>
    </div>
  );
}

export default NotePage;
