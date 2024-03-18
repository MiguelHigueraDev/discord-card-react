import { Badge } from "../interfaces/Badge";

/**
 * Renders a list of badges in a <ul> container.
 *
 * @param {Badge[]} badges - An array of Badge objects
 * @return {JSX.Element} The list of badges rendered as JSX
 */
const BadgeSection = ({ badges }: { badges: Badge[] }) => {
  return (
    <ul className="absolute max-w-[196px] flex items-end justify-end flex-wrap z-20 bottom-[-38px] right-[14px] bg-[#00000059] rounded-md p-[3px] select-none">
      {badges.map((badge) => (
        <li key={badge.name}>
          <img src={badge.iconUrl} className="w-[22px] h-[22px]" alt={badge.name} />
        </li>
      ))}
    </ul>
  );
};

export default BadgeSection;
