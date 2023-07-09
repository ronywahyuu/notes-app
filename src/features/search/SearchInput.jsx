import PropTypes from "prop-types";
import Input from "../../components/common/input/Input";
import styles from "./SearchInput.module.css";
import { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
function SearchInput({ keyword, keywordChange }) {
  const { locale } = useContext(LocaleContext);
  function onChangeKeyword(e) {
    const keyword = e.target.value;
    keywordChange(keyword);
  }

  return (
    <div className={styles.container}>
      <Input
        placeholder={
          locale === "en"
            ? "Search based on title..."
            : "Cari berdasarkan judul..."
        }
        value={keyword}
        onChange={onChangeKeyword}
      />
    </div>
  );
}

SearchInput.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchInput;
