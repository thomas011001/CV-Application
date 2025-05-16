import { useState } from "react";
import Option from "./Option";

function SkillsInfo({ onSubmit, onToggle, isActive }) {
  const [data, setData] = useState([
    {
      category: "Languages & Dev Tools",
      skills: "js html css",
    },
  ]);

  const [state, setState] = useState("normal");

  const [category, setCategory] = useState("");
  const [skills, setSkills] = useState("");

  function onSave() {
    onSubmit(data);
  }

  function handleOptionClick(index) {
    setSkills(data[index].skills);
    setCategory(data[index].category);
    setState(index);
  }

  function handleOptionDelete(index) {
    const updated = [...data];
    updated[index].display = "none";
    setData(updated);
    setState("normal");
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const newEd = { category, skills };
    setData([...data, newEd]);
    setCategory("");
    setSkills("");
    setState("normal");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const updated = [...data];
    updated[state] = { category, skills };
    setData(updated);
    setCategory("");
    setSkills("");
    setState("normal");
  }

  return (
    <div className={isActive ? "active category" : "category"}>
      <button
        className="toggler"
        onClick={() => {
          if (isActive) {
            onToggle("none");
          } else {
            onToggle("skills");
          }
        }}
      >
        Skills
      </button>
      <div className="toggler-target">
        {state == "normal" ? (
          <>
            <div className="options">
              {data.map((item, index) => (
                <Option
                  display={item.display || "block"}
                  key={index}
                  handleClick={() => handleOptionClick(index)}
                  handleDelete={() => handleOptionDelete(index)}
                  data={item}
                />
              ))}
            </div>
            <div className="btns-flex">
              <button onClick={() => setState("new")} className="save-btn">
                New
              </button>
              <button className="save-btn" onClick={onSave}>
                Save
              </button>
            </div>
          </>
        ) : state == "new" ? (
          <form onSubmit={handleFormSubmit}>
            <div className="form-flex">
              <label htmlFor="">
                Category
                <input
                  required
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Skills
                <textarea
                  required
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="btns-flex">
              <button
                type="button"
                onClick={() => {
                  setState("normal");
                  setCategory("");
                  setSkills("");
                }}
                className="save-btn"
              >
                Cansle
              </button>
              <input type="submit" value="add" className="save-btn" />
            </div>
          </form>
        ) : (
          <form onSubmit={handleEditSubmit}>
            <div className="form-flex">
              <label htmlFor="">
                Category
                <input
                  required
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Field of Study
                <textarea
                  required
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="btns-flex">
              <button
                className="save-btn"
                type="button"
                onClick={() => {
                  setState("normal");
                  setCategory("");
                  setSkills("");
                }}
              >
                Cancel
              </button>
              <input type="submit" value="Save" className="save-btn" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SkillsInfo;
