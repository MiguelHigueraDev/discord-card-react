import React from "react";
import { Role as RoleItem } from "../types";
import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";
import Role from "./Role";

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
    <BaseSection>
      <SectionTitle
        title={title || childrenCount == 1 ? "Role" : "Roles"}
        marginBottom={8}
      />
      <ul className="flex flex-wrap gap-[6px] mb-3">
        {roles &&
          roles.map((role, index) => (
            <Role key={index} role={role.name} color={role.color} />
          ))}
        {children}
      </ul>
    </BaseSection>
  );
};

export default RoleSection;
