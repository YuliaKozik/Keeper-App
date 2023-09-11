import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dKeeper } from "../../../declarations/dKeeper";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      dKeeper.createNote(newNote.title, newNote.content)
      return [newNote, ...prevNotes];
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await dKeeper.readNotes();
    setNotes(notesArray);
  }

  async function deleteNote(id) {
    const notes = await dKeeper.removeNote(id);

    setNotes([...notes]);
  }

  return (
    <div className="page">
      <Header />
      <main className="content">
        <CreateArea
          onAddNote={addNote} />
        <section className="notes-section">
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
