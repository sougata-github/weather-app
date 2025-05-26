import styles from "./errorCard.module.css";

const ErrorCard = ({ message }: { className?: string; message?: string }) => {
  return (
    <div className={styles.card}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default ErrorCard;
