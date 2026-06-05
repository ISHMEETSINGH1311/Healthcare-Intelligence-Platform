import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "doctor",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/users/register",
        form
      );

      alert(response.data.message);

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
          🏥 Register Doctor
        </h1>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Name"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
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
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
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
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
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
              background: "#10b981",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
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
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Register;