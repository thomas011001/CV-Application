import { useState } from "react";
import Option from "./Option";

function EducationInfo({ onSubmit, isActive, onToggle }) {
  const [data, setData] = useState([
    {
      university: "auc",
      field: "computer scince degree",
      degree: "Certificate",
      date: "May 2023",
    },
  ]);

  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [field, setField] = useState("");
  const [date, setDate] = useState("");

  const [state, setState] = useState("normal");

  function onSave() {
    onSubmit(data);
  }

  function handleOptionClick(index) {
    setUniversity(data[index].university);
    setDegree(data[index].degree);
    setField(data[index].field);
    setDate(data[index].date);
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
    const newEd = { university, degree, date, field };
    setData([...data, newEd]);
    setState("normal");
    setUniversity("");
    setDegree("");
    setDate("");
    setField("");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const updated = [...data];
    updated[state] = { university, degree, field, date };
    setData(updated);
    setUniversity("");
    setDegree("");
    setDate("");
    setField("");
    setState("normal");
  }

  return (
    <div className={isActive ? "active category" : "category"}>
      <button
        className="toggler"
        onClick={() => {
          isActive ? onToggle("none") : onToggle("education");
        }}
      >
        Education
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
              <label htmlFor="">
                University
                <input
                  required
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Field of Study
                <input
                  required
                  type="text"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Degree
                <input
                  required
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Graduation Date
                <input
                  required
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div className="btns-flex">
              <button
                type="button"
                onClick={() => {
                  setState("normal");
                  setDegree("");
                  setUniversity("");
                  setDate("");
                  setField("");
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
                University
                <input
                  required
                  type="text"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Field of Study
                <input
                  required
                  type="text"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Degree
                <input
                  required
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
              </label>
              <label htmlFor="">
                Graduation Date
                <input
                  required
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            <div className="btns-flex">
              <button
                className="save-btn"
                type="button"
                onClick={() => {
                  setState("normal");
                  setDegree("");
                  setUniversity("");
                  setDate("");
                  setField("");
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

export default EducationInfo;
