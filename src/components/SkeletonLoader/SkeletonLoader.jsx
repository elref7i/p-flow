import styles from './SkeletonLoader.module.css';

export default function SkeletonLoader() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonHeader}></div>
      <div className={styles.skeletonContent}></div>
    </div>
  );
}
