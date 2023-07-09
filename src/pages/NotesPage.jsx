import { useEffect, useState } from "react";
import NoteList from "../features/notes/NoteList";
import SearchInput from "../features/search/SearchInput";
// import { getActiveNotes, getAllNotes, getArchivedNotes } from "../utils/data";
import { useLocation, useSearchParams } from "react-router-dom";
import { getActiveNotes, getArchivedNotes } from "../utils/api";
function NotesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [notes, setNotes] = useState([]);
  // const [keyword, setKeyword] = useInput(searchParams.get("keyword") || "");
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });
  const location = useLocation();

  useEffect(() => {
    switch (true) {
      case location.pathname.includes("active"):
        setLoading(true);
        getActiveNotes().then(({ data }) => {
          setNotes(data);
          setLoading(false);
        });
        break;
      case location.pathname.includes("archived"):
        setLoading(true);
        getArchivedNotes().then(({ data }) => {
          setNotes(data);
          setLoading(false);
        });

        break;
      default:
        break;
    }

    return () => {
      setNotes([]);
    };
  }, [location.pathname]);

  function handleKeywordChange(keyword) {
    setKeyword(keyword);

    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter(
    (note) =>
      keyword === "" || note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="notes-page">
      <SearchInput keyword={keyword} keywordChange={handleKeywordChange} />

      <div className="founded-wrapper ">
        {searchParams.get("keyword") && (
          <span className="founded">found {filteredNotes.length} notes</span>
        )}
      </div>
      <NoteList notes={filteredNotes} loading={loading} />
    </div>
  );
}

export default NotesPage;
