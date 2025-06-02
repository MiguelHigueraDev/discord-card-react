import styles from "../styles/SectionTitle.module.css";

const SectionTitle = ({
  title,
  marginBottom,
}: {
  title: string;
  marginBottom?: number;
}) => {
  return (
    <h3 className={styles.title} style={{ marginBottom: marginBottom }}>
      {title}
    </h3>
  );
};

export default SectionTitle;
