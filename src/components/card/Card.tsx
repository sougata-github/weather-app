import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
