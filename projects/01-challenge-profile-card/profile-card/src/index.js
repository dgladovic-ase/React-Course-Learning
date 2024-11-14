import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {

  return (
    <img className="avatar" src="./avatar.jpg" alt="Profile shot"/>
  )
}

function Intro() { 

  return(
    <div>
      <h1>Dimitrije Gladovic</h1>
      <p>Trying to be a Full-stack web developer and thinkerer. When not coding or
        preparing a course, I like to play board games, to cook or just enjoy life.
      </p>
    </div>
  )
}

function SkillList() {

  return(
    <div className="skill-list">
      <Skill name='React' icon="🤐"/>
      <Skill name={'Angular'} icon="😛"/>
      <Skill name={'Typescript'} icon="😳"/>
      <Skill name={'Web design'} icon="🤡"/>
    </div>
  )
 }

function Skill(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

  const style = {backgroundColor: `rgb(${getRandomInt(255)},${getRandomInt(255)},${Math.random(255)})`}

  return (
    <div className="skill" style={style}>
      <span>{props.name}</span>
      <span>{props.icon}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
