import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => {
  if (props.primary) {
    return (
      <button
        className={`${styles.button} ${styles["button--primary"]}`}
        onClick={props.onClickFn}
      >
        {props.children}
      </button>
    );
  }

  if (props.danger) {
    return (
      <button
        className={`${styles.button} ${styles["button--danger"]}`}
        onClick={props.onClickFn}
      >
        {props.children}
      </button>
    );
  }

  return (
    <button className={styles.buton} onClick={props.onClickFn}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  onClickFn: PropTypes.func,
  children: PropTypes.node || PropTypes.string,
};

export default Button;
