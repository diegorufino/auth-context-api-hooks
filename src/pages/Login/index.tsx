import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";

const Login: React.FC = () => {
  function handleLogin() {}

  const context = useContext(AuthContext);

  console.log(context);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
