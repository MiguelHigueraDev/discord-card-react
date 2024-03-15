import React from "react";
import { Role } from "../interfaces/Role";

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
    <section className="discord-card-section">
      {title ? (
        <h3>{title}</h3>
      ) : (
        <>{childrenCount == 1 ? <h3>Role</h3> : <h3>Roles</h3>}</>
      )}
      <ul className="discord-card-roles-section">
        {roles &&
          roles.map((role, index) => (
            <li key={index} className="discord-card-role">
              <div
                className="discord-card-role-icon"
                style={{ backgroundColor: role.color }}
              ></div>
              <p>{role.name}</p>
            </li>
          ))}
        {children}
      </ul>
    </section>
  );
};

export default RoleSection;
