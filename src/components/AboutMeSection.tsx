import React from "react";
import { AboutMeItem } from "../interfaces/AboutMeItem";
import SectionTitle from "./SectionTitle";

/**
 * Generates the About Me section with a title and optional items.
 *
 * @param {React.JSX.Element | React.JSX.Element[]} children - The content of the About Me section.
 * @param {string} title - The title of the About Me section.
 * @param {AboutMeItem[]} items - The items to display in the About Me section, instead of passing children to it.
 * @return {JSX.Element} The About Me section component.
 */
const AboutMeSection = ({
  children,
  title,
  items,
}: {
  children?: React.JSX.Element | React.JSX.Element[];
  title?: string;
  items?: AboutMeItem[];
}) => {
  return (
    <section className="mb-1 text-[14px]">
      {title ? <SectionTitle title={title} /> : <SectionTitle title="About Me" />}
      {items &&
        items.map((item, index) =>
          // Convert it into a link if href attribute is provided
          item.href ? (
            <a
              key={index}
              className="text-blue-500 hover:text-blue-400" 
              style={{ marginBottom: item.marginBottom }}
              href={item.href}
              target="_blank"
            >
              {item.text}
            </a>
          ) : (
            <p key={index} style={{ marginBottom: item.marginBottom }}>
              {item.text}
            </p>
          )
        )}
      <>{children}</>
    </section>
  );
};

export default AboutMeSection;
