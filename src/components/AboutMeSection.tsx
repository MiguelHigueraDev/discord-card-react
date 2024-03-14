import React from "react";

const AboutMeSection = ({
  children,
  title,
}: {
  children?: React.JSX.Element | React.JSX.Element[];
  title?: string;
}) => {
  return (
    <section className="discord-card-section">
      {title ? (
        <h3>{title}</h3>
      ) : (
        <h3>About Me</h3>
      )}
      <>{children}</>
    </section>
  );
};

export default AboutMeSection;
