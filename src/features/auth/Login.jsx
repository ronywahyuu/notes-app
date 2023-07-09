import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import styles from "./Login.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import ThemeContext from "../../contexts/ThemeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import useInput from "../../hooks/useInput";
function Login({ login }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  function onSubmit(event) {
    event.preventDefault();

    login({ email, password });
  }
  return (
    <div className={styles["login-wrapper"]}>
      <div onClick={toggleTheme} className={styles.toggle}>
        <div className={styles["toggle-icon"]}>
          {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
        </div>
      </div>
      <form action="" onSubmit={onSubmit} className={styles.login}>
        <h3>{locale === "id" ? "Masuk" : "Sign in"}</h3>
        <div>
          <h5>Email</h5>
          <Input
            className={styles["login-input"]}
            placeholder="aldimartin@mail.com"
            value={email}
            onChange={onChangeEmail}
          />
        </div>

        <div className="form-group">
          <h5>Password</h5>
          <Input
            className={styles["login-input"]}
            placeholder="********"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className="">
          <Button primary>Login</Button>
        </div>
      </form>

      <Link to="/register" className={styles["btn-register"]}>
        {locale === "id" ? "Buat akun" : "Create an account"}
      </Link>
      <Link to="/" className={styles["login-back"]}>
        {locale === "id" ? "Kembali ke halaman utama" : "Back to Home"}
      </Link>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
