import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";
import { useContext } from "react";
import styles from "./Login.module.css";
import Input from "../../components/common/input/Input";
import LocaleContext from "../../contexts/LocaleContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import ThemeContext from "../../contexts/ThemeContext";
import useInput from "../../hooks/useInput";

function Register({ register }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirmPass, onChangeConfirmPass] = useInput("");

  function onSubmit(event) {
    event.preventDefault();

    if (password !== confirmPass) {
      alert(locale === "id" ? "Password tidak sama" : "Password not match");
      return;
    }

    register({ name, email, password });
  }

  return (
    <div className={styles["login-wrapper"]}>
      <div onClick={toggleTheme} className={styles.toggle}>
        <div className={styles["toggle-icon"]}>
          {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
        </div>
      </div>
      <form action="" onSubmit={onSubmit} className={styles.login}>
        <h3>{locale === "id" ? "Daftar" : "Register"}</h3>
        <div className="form-group">
          <h5>{locale === "id" ? "Nama" : "Name"}</h5>
          <Input
            type="text"
            className={styles["login-input"]}
            placeholder="aldimartin@mail.com"
            value={name}
            onChange={onChangeName}
          />
        </div>

        <div className="form-group">
          <h5>Email</h5>
          <Input
            type={email}
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
        <div className="form-group">
          <h5>
            {locale === "id" ? "Konfirmasi Password" : "Confirm Password"}
          </h5>
          <Input
            className={styles["login-input"]}
            placeholder="********"
            type="password"
            value={confirmPass}
            onChange={onChangeConfirmPass}
          />
        </div>
        <div className="">
          <Button primary>{locale === "id" ? "Daftar" : "Register"}</Button>
        </div>
      </form>

      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        {locale === "id" ? "Sudah punya akun?" : "Already have an account?"}
        <Link to="/login" className={styles["btn-register"]}>
          {locale === "id" ? " Silahkan Login" : "Login here"}
        </Link>
      </div>
      <Link to="/" className={styles["login-back"]}>
        Back to Home
      </Link>
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
