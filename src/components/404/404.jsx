import PropTypes from "prop-types";
import styles from "./404.module.css";
import { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
const NotFound = ({ page, loading }) => {
  const { locale } = useContext(LocaleContext);
  if (loading) {
    return (
      <div className={styles.empty}>
        <h1>{locale === "en" ? "Loading..." : "Memuat..."}</h1>
      </div>
    );
  }

  return (
    <div className={styles.empty}>
      {page ? (
        <>
          <h1>Oops!</h1>
          <p>
            {locale === "en" ? "Page not found" : "Halaman tidak ditemukan"}
          </p>
        </>
      ) : (
        <h1>
          {locale === "en"
            ? "No notes found"
            : "Tidak ada catatan yang ditemukan"}
        </h1>
      )}
    </div>
  );
};

NotFound.propTypes = {
  page: PropTypes.bool,
  loading: PropTypes.bool,
};

export default NotFound;
