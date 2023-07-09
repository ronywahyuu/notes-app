// import AddNote from "./AddNote";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
// import { Link } from "react-router-dom";

const Navigation = () => {
  const { locale } = useContext(LocaleContext);

  // const activeTabClass = "header__nav-tab header__nav--active";
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerList}>
        <NavLink
          to="active"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          {locale === "en" ? "Active Notes" : "Catatan Aktif"}
        </NavLink>
        <NavLink
          to="archived"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          {locale === "en" ? "Archived" : "Arsip"}
        </NavLink>
      </div>

      {/* <Link to="/notes/create" className="link">
        <button className="header__nav--add-note">Add Note</button>
      </Link> */}
    </nav>
  );
};

Navigation.propTypes = {
  activeTab: PropTypes.string,
  switchTabHandler: PropTypes.func,
};

export default Navigation;
