import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";
import "./App.css";

const skills = [
  { name: "HTML", level: 5 },
  { name: "Python", level: 2 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
];

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <hr></hr>
      <form>
        <NewSkillForm></NewSkillForm>
      </form>
    </div>
  );
}
