import styles from "./FloatingBtn.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";
function FloatingButton() {
  return (
    <div className={styles.floating}>
      <Link to="/create">
        <Button primary rounded>
          <AiOutlinePlus />
        </Button>
      </Link>
    </div>
  );
}

export default FloatingButton;
