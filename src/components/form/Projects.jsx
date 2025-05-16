import { useState } from "react";
import Option from "./Option";

function ProjectsInfo({ onSubmit, onToggle, isActive }) {
  const [data, setData] = useState([
    {
      project: "My Portfolio",
      description: "HTML, CSS, responsive design, and animations",
    },
  ]);

  const [state, setState] = useState("normal");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");

  function onSave() {
    onSubmit(data);
  }

  function handleOptionClick(index) {
    setProject(data[index].project);
    setDescription(data[index].description);
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
    const newProject = { project, description };
    setData([...data, newProject]);
    setProject("");
    setDescription("");
    setState("normal");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const updated = [...data];
    updated[state] = { project, description };
    setData(updated);
    setProject("");
    setDescription("");
    setState("normal");
  }

  return (
    <div className={isActive ? "active category" : "category"}>
      <button
        className="toggler"
        onClick={() => {
          onToggle(isActive ? "none" : "project");
        }}
      >
        Projects
      </button>
      <div className="toggler-target">
        {state === "normal" ? (
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
        ) : state === "new" ? (
          <form onSubmit={handleFormSubmit}>
            <div className="form-flex">
              <label>
                Project
                <input
                  required
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />
              </label>
              <label>
                Description
                <textarea
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="btns-flex">
              <button
                type="button"
                onClick={() => {
                  setState("normal");
                  setProject("");
                  setDescription("");
                }}
                className="save-btn"
              >
                Cancel
              </button>
              <input type="submit" value="Add" className="save-btn" />
            </div>
          </form>
        ) : (
          <form onSubmit={handleEditSubmit}>
            <div className="form-flex">
              <label>
                Project
                <input
                  required
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                />
              </label>
              <label>
                Description
                <textarea
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="btns-flex">
              <button
                className="save-btn"
                type="button"
                onClick={() => {
                  setState("normal");
                  setProject("");
                  setDescription("");
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

export default ProjectsInfo;
