import { useNavigate } from "react-router-dom";
import Login from "../features/auth/Login";
import { login } from "../utils/api";
import PropTypes from "prop-types";

function LoginPage({ successLogin }) {
  const navigate = useNavigate();
  async function handleLogin({ email, password }) {
    const { error, data: accessToken } = await login({ email, password });

    if (error) {
      // return alert(error.message);
      return;
    }

    successLogin(accessToken);
    navigate("/active");
  }

  return (
    <div>
      <Login login={handleLogin} />
    </div>
  );
}

LoginPage.propTypes = {
  successLogin: PropTypes.func.isRequired,
};

export default LoginPage;
