import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);

      localStorage.setItem(
        "token",
        response.data.access_token
      );
      localStorage.setItem(
  "role",
  response.data.role
);

localStorage.setItem(
  "name",
  response.data.name
);

      alert("Login Successful!");

const role =
  response.data.role;

if (
  role ===
  "research_scholar"
) {
  navigate(
    "/research-dashboard"
  );

} else if (
  role ===
  "authority"
) {
  navigate(
    "/authority-dashboard"
  );

} else if (
  role ===
  "hospital_admin"
) {
  navigate(
    "/hospital-dashboard"
  );

} else {
  navigate(
    "/dashboard"
  );
}

    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.detail);
      } else {
        alert("Login Failed");
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          🏥 Healthcare AI
        </h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "10px",
              border:
                "1px solid #475569",
              background: "#334155",
              color: "white",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border:
                "1px solid #475569",
              background: "#334155",
              color: "white",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "#3b82f6",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <button
          onClick={() =>
            navigate("/register")
          }
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            border: "none",
            borderRadius: "10px",
            background: "#64748b",
            color: "white",
            cursor: "pointer",
          }}
        >
          Go to Register
        </button>
      </div>
    </div>
  );
}

export default Login;