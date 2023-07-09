import { useNavigate } from "react-router-dom";
import CreateForm from "../features/notes/CreateForm";
import { addNote } from "../utils/api";
// import { addNote } from "../utils/data";

function CreateNote() {
  const navigate = useNavigate();
  function createNote({ title, body }) {
    addNote({ title, body });
    navigate("/active");
  }
  return (
    <div className="notes-page">
      <h2>Create Note</h2>
      <CreateForm create={createNote} />
    </div>
  );
}

export default CreateNote;
