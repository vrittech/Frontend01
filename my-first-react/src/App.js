import { useState } from "react";
import "./App.css";
import LoginForm from "./Login";

import RegistrationForm from "./RegistrationForm";
function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <div className="App">
      {isRegistered ? (
        <LoginForm />
      ) : (
        <RegistrationForm setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
}

export default App;
// Meeting ID: 212 664 2141
// Passcode: 348991
