import NotFound from "../../components/404/404";
import styles from "./Note.module.css";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
function NoteList({ notes, loading }) {
  if (loading) return <NotFound loading />;

  if (!notes.length) return <NotFound />;

  return (
    <div className={styles.notes}>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
      {/* <NoteItem /> */}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default NoteList;
