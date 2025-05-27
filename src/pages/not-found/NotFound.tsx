import { Link } from "react-router";

import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      The page you're looking for does not exist.
      <Link to="/dashboard" className={styles.link}>
        Go to back Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
