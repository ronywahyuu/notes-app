import { useNavigate } from "react-router-dom";
import Register from "../features/auth/Register";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function handleRegister({ name, email, password }) {
    const { error } = await register({ name, email, password });

    if (error) {
      return alert(error.message);
    }

    navigate("/login");
    // console.log(name, email, password);
  }

  return (
    <div>
      <Register register={handleRegister} />
    </div>
  );
}

export default RegisterPage;
