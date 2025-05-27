import { Outlet } from "react-router-dom";

import styles from "./layout.module.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.layoutMain}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
