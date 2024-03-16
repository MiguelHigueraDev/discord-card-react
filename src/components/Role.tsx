/**
 * Renders a role component with the specified role and color.
 *
 * @param {string} role - The role to be displayed
 * @param {string} color - The color of the role icon
 * @return {JSX.Element} The role component JSX
 */
const Role = ({ role, color }: { role: string; color: string }) => {
  return (
    <li className="discord-card-role">
      <div
        className="discord-card-role-icon"
        style={{ backgroundColor: color }}
      ></div>
      <p>{role}</p>
    </li>
  );
};

export default Role;
