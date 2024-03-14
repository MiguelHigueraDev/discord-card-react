import React from "react";

const RoleSection = ({
  title,
  children,
}: {
  title?: string;
  children?: React.JSX.Element | React.JSX.Element[];
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
        {children}
      </ul>
    </section>
  );
};

export default RoleSection;
