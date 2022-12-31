import { useState } from "react";
const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isEnable, setEnable] = useState(true);
  const handleUserName = ({ target: { value } }) => {
    console.log(value, "event");
    setUsername(value);
  };
  console.log(username, "username");
  const handlePassword = ({ target: { value } }) => {
    console.log(value, "event");
    setPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    username !== "" && password !== ""
      ? alert(
          password === confirmPassword
            ? "Data Submitted"
            : "password must match!"
        )
      : alert("Fill Data!");
  };
  const handleConfirmPassword = ({ target: { value } }) => {
    setConfirmPassword(value);
    setErrorMessage(password !== value && "Password must match!");
  };
  return (
    <form>
      <label>User Name</label>
      <input
        type="text"
        id="username-input"
        value={username}
        placeholder="username"
        onChange={handleUserName}
      />
      <br />
      <br />
      <label>Password</label>
      <input
        type="password"
        id="password-input"
        placeholder="Password"
        // onKeyUp={handleKeyUp}
        value={password}
        onChange={handlePassword}
      />
      <br />
      <br />
      <label> Confirm Password</label>
      <input
        type="confirm-password"
        id="password-input"
        placeholder="Password"
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
      <p style={{ color: "red" }}>{errorMessage}</p>
      <button
        type="submit"
        id="button-input"
        // disabled={isEnable}
        onClick={handleSubmit}
      >
        Register
      </button>
    </form>
  );
};
export default RegistrationForm;
