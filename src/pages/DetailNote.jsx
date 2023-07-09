import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Detail from "../features/notes/Detail";
import { useEffect, useState } from "react";
import { getNote } from "../utils/api";
// import { getNote } from "../utils/data";
function DetailNote() {
  const { noteid } = useParams();

  const [note, setNote] = useState({});

  useEffect(() => {
    getNote(noteid).then(({ data }) => setNote(data));
  }, [noteid]);

  return <Detail {...note} />;
}

DetailNote.propTypes = {
  active: PropTypes.bool,
  archived: PropTypes.bool,
};

export default DetailNote;
