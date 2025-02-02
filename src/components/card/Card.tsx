import { motion } from "framer-motion";

import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div className={`${styles.card} ${className}`}>
      {children}
    </motion.div>
  );
};

export default Card;
