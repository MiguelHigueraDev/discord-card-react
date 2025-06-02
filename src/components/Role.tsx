/**
 * Renders a role component with the specified role and color.
 *
 * @param {string} role - The role to be displayed
 * @param {string} color - The color of the role icon
 * @return {JSX.Element} The role component JSX
 */
import styles from "../styles/Role.module.css";

const Role = ({ role, color }: { role: string; color: string }) => {
  return (
    <li className={styles.roleContainer}>
      <div className={styles.roleIcon} style={{ backgroundColor: color }}></div>
      <div className={styles.roleText}>{role}</div>
    </li>
  );
};

export default Role;
