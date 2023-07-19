import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({addSkill}) {
    const [skill, setSkill] = useState({
        name: "",
        level: 3
    });

const [errorMessage, setErrorMessage] = useState('')

function handleChange(i) {
    console.log(i.target.value);

    setSkill({
        ...skill,
        [i.target.name]: i.target.value
    })
}

function handleSubmit(i){
    i.preventDefault();
    console.log('handleSubmit function is running')


if(skill.name === "" || skill.level === ""){
    return setErrorMessage('please fill out each input before you submit')
}



addSkill(skill);

setErrorMessage('');

setSkill({
    name: '',
    level: '',
})


}


  return (
    <>
    <span>{errorMessage ? errorMessage : ''}</span>
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>Skill</label>
      <input type="text" placeholder="skill" value={skill.name} name="name" onChange={handleChange}/>
      <label>Level</label>
      <select name="level" placeholder="level" value={skill.level} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button>ADD SKILL</button>
    </form>
    </>
  );
}
