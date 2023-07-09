import styles from "./Input.module.css";
import PropTypes from "prop-types";

function Input({ placeholder, as, className, type, value, onChange }) {
  if (as === "textarea") {
    return (
      <textarea
        className={`${styles.textarea} ${className}}`}
        placeholder={placeholder}
        rows="50"
        value={value}
        onChange={onChange}
      ></textarea>
    );
  }
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
