import { useState } from "react";
import NewSkillForm from "./NewSkillForm";
import SkillList from "./SkillList";
import "./App.css";
import "./styles.css";


export default function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "Python", level: 2 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
  ]);


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
