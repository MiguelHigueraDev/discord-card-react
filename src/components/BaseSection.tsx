import React from "react";

const BaseSection = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <section>{children}</section>;
};

export default BaseSection;
