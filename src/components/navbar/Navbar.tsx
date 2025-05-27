import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

import { useSignOut, useUser } from "../../hooks/useAuth";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { mutate: signOut, status } = useSignOut();
  const { user, error, isLoading } = useUser();

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
          <div className={styles.navTitleContainer}>
            <Zap size={28} fill="#10B981" strokeWidth={0} />
            <h1 className={styles.navTitle}>Supa Weather</h1>
          </div>

          {error ? (
            <p>Failer to load user</p>
          ) : (
            <div className={styles.avatarWrapper}>
              <button
                onClick={() => setOpen(!open)}
                className={styles.avatarButton}
              >
                {isLoading ? (
                  <div className={styles.avatarLoader} />
                ) : (
                  <img src={user?.avatar} width={36} height={36} />
                )}
              </button>

              {open && (
                <div className={styles.popover} ref={popoverRef}>
                  <div className={styles.userInfo}>
                    {isLoading ? (
                      <div className={styles.infoLoader}>
                        <div className={styles.skeleton1} />
                        <div className={styles.skeleton2} />
                      </div>
                    ) : (
                      <>
                        <span className={styles.name}>{user?.name}</span>
                        <span className={styles.email}>{user?.email}</span>
                      </>
                    )}
                  </div>
                  <button
                    className={styles.signOut}
                    onClick={() => signOut()}
                    disabled={status === "pending"}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
