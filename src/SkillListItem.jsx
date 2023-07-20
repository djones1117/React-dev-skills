import "./SkillListItem.css";

export default function SkillListItem({ skill, index }) {
  return (
    <li
      className={"SkillListItem"}
      style={{ backgroundColor: index % 2 ? "lavender" : "plum" }}
    >
      {" "}
      {skill.name} Level: {skill.level}
    </li>
  );
}
