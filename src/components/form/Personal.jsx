import { useState } from "react";

function PersonalInfo({ onSubmit }) {
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
    <div className="category">
      <button>Personal Info</button>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </label>
        <label htmlFor="">
          Phone
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Github Url
          <input
            type="url"
            onChange={(e) => setGitHubUrl(e.target.value)}
            value={gitHubUrl}
          />
        </label>
        <input type="submit" value="save" />
      </form>
    </div>
  );
}

export default PersonalInfo;
