import PropTypes from "prop-types";
import { formatDate } from "../../utils/helpers";
import styles from "./Detail.module.css";
import Button from "../../components/common/button/Button";
import { BiArchiveIn, BiArchiveOut, BiTrashAlt } from "react-icons/bi";
// import { archiveNote, deleteNote, unarchiveNote } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { archiveNote, deleteNote, unarchiveNote } from "../../utils/api";
import NotFound from "../../components/404/404";

function Detail({ id, title, body, createdAt, archived }) {
  const navigate = useNavigate();
  function handleArchive() {
    if (!id) return;
    archiveNote(id);
    navigate("/active");
  }

  function handleUnarchive() {
    // if (!id) return;
    unarchiveNote(id);
    navigate("/active");
  }

  function handleDelete() {
    if (!id) return;
    deleteNote(id);
    navigate("/active");
  }

  if (!title || !body || !createdAt) {
    return <NotFound loading />;
  }

  return (
    <div className={styles["detail-component"]}>
      <p className={styles["note-date"]}>
        Created at : {formatDate(createdAt, "en")}
      </p>
      <div className="detail-text ">
        <h2 className={styles["note-title"]}>{title}</h2>
        <p className={styles["note-body"]}>{body}</p>
      </div>

      <div className="detail-action">
        <div className={styles["action"]}>
          <Button primary>
            {archived ? (
              <BiArchiveIn
                onClick={handleUnarchive}
                className="icon icon-archive"
              />
            ) : (
              <BiArchiveOut
                onClick={handleArchive}
                className="icon icon-unarchive"
              />
            )}
          </Button>
          <Button danger onClickFn={handleDelete}>
            <BiTrashAlt className="icon icon--delete" />
          </Button>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
};

export default Detail;
