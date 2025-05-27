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
            <Zap
              size={28}
              fill="#10B981"
              strokeWidth={0}
              style={{
                marginRight: "4px",
              }}
            />{" "}
            Supa Weather
          </span>
          <p className={styles.subheading}>Welcome back! Sign in to contine.</p>
        </div>

        <button
          className={styles.signInButton}
          onClick={() => signIn()}
          disabled={status === "pending"}
        >
          <FaGoogle size={15} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
