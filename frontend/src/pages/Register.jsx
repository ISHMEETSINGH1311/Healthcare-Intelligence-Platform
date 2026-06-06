import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const selectedRole =
    localStorage.getItem("registerRole") ||
    "doctor";

  const roleNames = {
    doctor: "Doctor",
    research_scholar:
      "Research Scholar",
    authority: "Authority",
    hospital_admin:
      "Hospital Admin",
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: selectedRole,
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/users/register",
        form
      );

      alert(response.data.message);

      localStorage.removeItem(
        "registerRole"
      );

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
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
          width: "420px",
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
            marginBottom: "10px",
          }}
        >
          🏥 Register{" "}
          {
            roleNames[
              selectedRole
            ]
          }
        </h1>

        <p
          style={{
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Creating a{" "}
          {
            roleNames[
              selectedRole
            ]
          }{" "}
          account
        </p>

        <form
          onSubmit={handleRegister}
        >
          <input
            placeholder="Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
          >
            Register{" "}
            {
              roleNames[
                selectedRole
              ]
            }
          </button>
        </form>

        <button
          onClick={() =>
            navigate("/")
          }
          style={{
            ...buttonStyle,
            background: "#64748b",
            marginTop: "15px",
          }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #475569",
  background: "#334155",
  color: "white",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  background: "#10b981",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Register;