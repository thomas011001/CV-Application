import { useState } from "react";

function PersonalInfo({ onSubmit, onToggle, isActive }) {
  const [fullName, setFullName] = useState("Thomas Yacoub");
  const [phoneNumber, setPhoneNumber] = useState("010945");
  const [email, setEmail] = useState("thomas@gmail.com");
  const [gitHubUrl, setGitHubUrl] = useState("https://github.com");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { fullName, phoneNumber, email, gitHubUrl };

    onSubmit(data);
  }

  return (
    <div className={isActive ? "active category" : "category"}>
      <button
        className="toggler"
        onClick={() => {
          if (isActive) {
            onToggle("none");
          } else {
            onToggle("personal");
          }
        }}
      >
        Personal Info
      </button>
      <form onSubmit={handleSubmit} className="toggler-target">
        <div className="form-flex">
          <label>
            Full Name
            <input
              required
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </label>
          <label htmlFor="">
            Phone
            <input
              required
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            Github Url
            <input
              required
              type="url"
              onChange={(e) => setGitHubUrl(e.target.value)}
              value={gitHubUrl}
            />
          </label>
        </div>
        <div className="btns-flex">
          <input type="submit" value="save" className="save-btn" />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
