import React from "react";
import { Role } from "../interfaces/Role";
import BaseSection from "./BaseSection";
import SectionTitle from "./SectionTitle";

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
  roles?: Role[];
}) => {
  const childrenCount = React.Children.count(children);

  return (
    <BaseSection>
      {title ? (
        <SectionTitle marginBottom={8} title={title} />
      ) : (
        <>
          {childrenCount == 1 ? (
            <SectionTitle marginBottom={8} title="Role" />
          ) : (
            <SectionTitle marginBottom={8} title="Roles" />
          )}
        </>
      )}
      <ul className="flex flex-wrap gap-[6px] mb-1">
        {roles &&
          roles.map((role, index) => (
            <li
              key={index}
              className="bg-[#4b4b4b8c] py-[1px] px-[8px] rounded-[4px] flex items-center gap-[6px] select-none border-[0.5px] border-[#8887876a]"
            >
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: role.color }}
              ></div>
              <p className="text-[0.8rem]">{role.name}</p>
            </li>
          ))}
        {children}
      </ul>
    </BaseSection>
  );
};

export default RoleSection;
