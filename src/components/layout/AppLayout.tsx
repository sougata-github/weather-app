import { Outlet } from "react-router-dom";

import styles from "./layout.module.css";
import Navbar from "../navbar/Navbar";

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
