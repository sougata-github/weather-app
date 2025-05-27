import { FaGoogle } from "react-icons/fa";
import { Zap } from "lucide-react";

import { useSignIn } from "../../hooks/useAuth";
import styles from "./login.module.css";

const Login = () => {
  const { mutate: signIn, status } = useSignIn();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>
            <Zap size={20} fill="#10B981" /> Supa Weather
          </span>
          <p className={styles.subheading}>Welcome back! Sign in to contine</p>
        </div>

        <button
          className={styles.signInButton}
          onClick={() => signIn()}
          disabled={status === "pending"}
        >
          <span>
            <FaGoogle size={15} fill="#ffffff" />
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
