import { useState } from "react";
const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const { username, password } = userInfo;
  const handleUserName = ({ target: { value } }) => {
    console.log(value, "event");
    setUserInfo((prevValue) => {
      console.log(prevValue, "prev value");
      return { ...prevValue, username: value };
    });
  };
  console.log(userInfo, "userInfo");
  const handlePassword = ({ target: { value } }) => {
    setUserInfo({ ...userInfo, password: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    username !== "" && password !== ""
      ? alert("Data Submitted")
      : alert("Fill Data!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>User Name</label>
      <input
        type="text"
        id="username-input"
        value={userInfo.username}
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
        value={userInfo.password}
        onChange={handlePassword}
      />
      <br />
      <br />
      <button
        type="submit"
        id="button-input"
        // disabled={isEnable}
        // onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
