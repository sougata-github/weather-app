import { useEffect, useRef, useState } from "react";
import { User } from "lucide-react";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1>React Weather</h1>
          <div className={styles.avatarWrapper}>
            <button
              onClick={() => setOpen(!open)}
              className={styles.avatarButton}
            >
              <User className={styles.icon} />
            </button>

            {open && (
              <div className={styles.popover} ref={popoverRef}>
                <div className={styles.userInfo}>
                  <span className={styles.name}>Sougata Das</span>
                  <span className={styles.email}>sougata@email.com</span>
                </div>
                <button className={styles.signOut}>Sign Out</button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
