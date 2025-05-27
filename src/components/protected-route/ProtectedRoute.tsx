import { useNavigate } from "react-router";
import { Loader } from "lucide-react";
import { useEffect } from "react";

import styles from "./protectedRoute.module.css";
import { useUser } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2. If not authenticated, redirect to "/login"
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //3. Show loading state
  if (isLoading)
    return (
      <div className={styles.loaderContainer}>
        <Loader className={styles.animateSpin} size={20} />
      </div>
    );

  //4. If there is a user, return the compone
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
