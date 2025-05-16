import PersonalInfo from "./form/Personal";
import EducationInfo from "./form/Education";
import "../styles/Form.css";
import { useState } from "react";
import SkillsInfo from "./form/Skills";
import ProjectsInfo from "./form/Projects";
import ExperienceInfo from "./form/Experience";

function Forms({
  personalFormHandler,
  educationFormHandler,
  experienceFormHandler,
  projectFormHandler,
  skillsFormHandler,
}) {
  const [toggle, setToggle] = useState("None");

  return (
    <div className="form">
      <PersonalInfo
        onSubmit={personalFormHandler}
        isActive={toggle === "personal"}
        onToggle={setToggle}
      />
      <hr />
      <EducationInfo
        onSubmit={educationFormHandler}
        isActive={toggle === "education"}
        onToggle={setToggle}
      />
      <hr />
      <ExperienceInfo
        onSubmit={experienceFormHandler}
        isActive={toggle === "experience"}
        onToggle={setToggle}
      />
      <hr />
      <ProjectsInfo
        onSubmit={projectFormHandler}
        isActive={toggle === "project"}
        onToggle={setToggle}
      />
      <hr />
      <SkillsInfo
        onSubmit={skillsFormHandler}
        isActive={toggle === "skills"}
        onToggle={setToggle}
      />
    </div>
  );
}

export default Forms;
