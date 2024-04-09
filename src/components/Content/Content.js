import styles from "./Content.module.css";

function Content({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}





export default Content;