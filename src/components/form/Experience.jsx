import { useState } from "react";
import Option from "./Option";

function ExperienceInfo({ onSubmit, onToggle, isActive }) {
  const [data, setData] = useState([
    {
      experience: "Frontend Developer Internship",
      description: "Built responsive UI using React and CSS",
    },
  ]);

  const [state, setState] = useState("normal");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  function onSave() {
    onSubmit(data);
  }

  function handleOptionClick(index) {
    setExperience(data[index].experience);
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
    const newExp = { experience, description };
    const updated = [...data, newExp];
    setData(updated);
    setExperience("");
    setDescription("");
    setState("normal");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const updated = [...data];
    updated[state] = { experience, description };
    setData(updated);
    setExperience("");
    setDescription("");
    setState("normal");
  }

  return (
    <div className={isActive ? "active category" : "category"}>
      <button
        className="toggler"
        onClick={() => onToggle(isActive ? "none" : "experience")}
      >
        Experience
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
                Experience
                <input
                  required
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
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
                  setExperience("");
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
                Experience
                <input
                  required
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
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
                  setExperience("");
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

export default ExperienceInfo;
