import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiLogout,
  HiOutlineTranslate,
  HiOutlineChevronDown,
} from "react-icons/hi";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";
function Header({ name, logout }) {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h1 className={styles.heading}>Notelify</h1>
      </Link>
      <Navigation />
      {/* profile */}
      <div>
        <div className={styles.profile} onClick={toggleDropdown}>
          {/* <BiLogInCircle className={styles.login} /> */}
          <p>{name}</p>
          <HiOutlineChevronDown className={styles.login} />
        </div>

        {/* select menu dropdown*/}
        <div className={showDropdown ? styles.dropdown : styles.hidden}>
          <div className={styles.dropdownContent}>
            <div className={styles.itemWrapper} onClick={toggleLocale}>
              <span>
                <HiOutlineTranslate className={styles.icon} />
              </span>
              <span>{locale === "id" ? "Id" : "En"}</span>
            </div>

            {/* <div className={styles.lineBreak}></div> */}

            <div className={styles.itemWrapper} onClick={toggleTheme}>
              <span>
                {theme === "light" ? (
                  <HiOutlineMoon className={styles.icon} />
                ) : (
                  <HiOutlineSun className={styles.icon} />
                )}
                {/* <HiOutlineSun className={styles.icon} /> */}
              </span>
              <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
            </div>

            <div className={styles.itemWrapper} onClick={logout}>
              <span>
                <HiLogout className={styles.icon} />
              </span>
              <span>{locale === "id" ? "Keluar" : "Logout"}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
