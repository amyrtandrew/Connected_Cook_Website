import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Login/LoginForm.jsx";
import { useDispatch } from "react-redux";
import NavBar from "../Components/NavBar/NavBar.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post("/api/auth", formData);

    if (res.data.success) {
      dispatch({
        type: "SET_USER_ID",
        payload: res.data.userId,
      });
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-page">
        <LoginForm onLogin={handleLogin} />
      </div>
    </>
  );
}
