import styles from "./loader.module.css";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} ${styles.loader} ${styles.card}`}>
      <></>
    </div>
  );
};

export default Loader;
