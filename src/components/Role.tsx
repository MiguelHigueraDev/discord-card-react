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
