import { Link } from "react-router";

import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p>The page you're looking for does not exist.</p>

      <div>
        <Link to="/dashboard" className={styles.link}>
          Go back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
