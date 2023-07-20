export default function SkillListItem({ item }) {
  return (
    <div>
      <h3>Name: {item.name}</h3>
      <p>Level: {item.level}</p>
    </div>
  );
}
