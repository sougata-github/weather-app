import styles from "./errorCard.module.css";
import Card from "../card/Card";

const ErrorCard = ({
  className,
  message,
}: {
  className?: string;
  message?: string;
}) => {
  return (
    <Card className={`${className} ${styles.errorCard}`}>
      <p className={styles.errorMessage}>{message}</p>
    </Card>
  );
};

export default ErrorCard;
