import styles from './layout.module.css';
import TableOfContents from './presentational/TableOfContents/index';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <TableOfContents/>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}