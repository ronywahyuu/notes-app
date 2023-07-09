import { Link } from "react-router-dom";
import styles from "./Note.module.css";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/helpers";
import { BsCalendarDate } from "react-icons/bs";
import { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";

function NoteItem({ note }) {
  const { locale } = useContext(LocaleContext);
  const { id, title, body, createdAt, archived } = note;

  return (
    <div className={styles.card}>
      <span>
        <BsCalendarDate /> : {formatDate(createdAt, locale)}
      </span>
      <h3 className={styles.titleCard}>
        <Link
          to={`/${archived ? "archived" : "active"}/${id}`}
          className="link"
        >
          {title}
        </Link>
      </h3>
      <p className={styles.bodyCard}>
        {body.length > 100 ? body.substring(0, 100) + "..." : body}
      </p>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItem;
