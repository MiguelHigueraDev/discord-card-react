import React from "react";
/**
 * A base section component.
 * This should be deleted in a future release because it doesn't do anything besides
 * rendering a section element. (it used to be styled)
 * @deprecated
 */
const BaseSection = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <section>{children}</section>;
};

export default BaseSection;
