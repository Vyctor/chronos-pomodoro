import styles from './Heading.module.css';

export function Heading({ title }: { title: string }) {
  return <h1 className={styles.heading}>{title}</h1>;
}
