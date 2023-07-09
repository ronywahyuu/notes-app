import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./MainLayout.module.css";
import Header from "../header/Header";
import { useEffect } from "react";
import FloatingButton from "../common/button/FloatingButton";
import PropTypes from "prop-types";

function MainLayout({ user, logout }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/active");
    }
  });

  return (
    <main className={styles.main}>
      <Header {...user} logout={logout} />
      <div className={styles.container}>
        <Outlet />
        {location.pathname !== "/create" &&
          !location.pathname.includes("notes") && <FloatingButton />}
      </div>
    </main>
  );
}

MainLayout.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default MainLayout;
