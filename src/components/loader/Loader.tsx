import styles from "./Loader.module.css";
import Card from "../card/Card";

const Loader = ({ className }: { className?: string }) => {
  return (
    <Card className={`${className} ${styles.loader}`}>
      <></>
    </Card>
  );
};

export default Loader;
