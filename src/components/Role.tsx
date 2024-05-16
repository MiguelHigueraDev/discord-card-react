/**
 * Renders a role component with the specified role and color.
 *
 * @param {string} role - The role to be displayed
 * @param {string} color - The color of the role icon
 * @return {JSX.Element} The role component JSX
 */
const Role = ({ role, color }: { role: string; color: string }) => {
  return (
    <li className="bg-[#4b4b4b40] py-[0px] px-[8px] rounded-[4px] flex items-center gap-[6px] select-none border-[0.5px] border-[#8887876a]">
      <div
        className="w-[12px] h-[12px] rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <div className="text-[0.72rem] p-0 m-0">{role}</div>
    </li>
  );
};

export default Role;
