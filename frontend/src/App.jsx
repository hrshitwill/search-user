import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // GET notes
  useEffect(() => {

    fetchNotes();

  }, []);

  async function fetchNotes() {
try {

      const response = await axios.get(
        "http://localhost:3000/notes"
      );

      setNotes(response.data);

    } catch (error) {

      console.log(error);

    }

  }

  // POST note
  async function addNote() {

    if (input.trim() === "") {
      return;
    }

    try {

      const response = await axios.post(
        "http://localhost:3000/notes",
        { note: input }
      );

      setNotes(response.data.notes);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
}

export default App;