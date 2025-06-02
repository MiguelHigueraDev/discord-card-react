import React from "react";
import { Role as RoleItem } from "../../types";
import SectionTitle from "../section-title";
import Role from "../Role";
import styles from "../../styles/RoleSection.module.css";

/**
 * Render a section for displaying roles with an optional alternative title and list of roles.
 *
 * @param {string} title - Optional title for the section
 * @param {React.JSX.Element | React.JSX.Element[]} children - Optional children elements
 * @param {Role[]} roles - List of roles to display
 * @return {React.JSX.Element} The JSX element representing the role section
 */
const RoleSection = ({
  title,
  children,
  roles,
}: {
  title?: string;
  children?: React.JSX.Element | React.JSX.Element[];
  roles?: RoleItem[];
}) => {
  const childrenCount = React.Children.count(children);

  return (
    <section>
      <SectionTitle
        title={title || childrenCount == 1 ? "Role" : "Roles"}
        marginBottom={8}
      />
      <ul className={styles.rolesList}>
        {roles &&
          roles.map((role, index) => (
            <Role key={index} role={role.name} color={role.color} />
          ))}
        {children}
      </ul>
    </section>
  );
};

export default RoleSection;
