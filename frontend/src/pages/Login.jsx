import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] =
    useState("doctor");

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

      if (
        selectedRole !==
        response.data.role
      ) {
        alert(
          `This account belongs to ${response.data.role}. Please select the correct portal.`
        );
        return;
      }

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
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(
          error.response.data.detail
        );
      } else {
        alert("Login Failed");
      }
    }
  };

  const roles = [
    {
      key: "doctor",
      title: "Doctor",
      icon: "👨‍⚕️",
      email: "doctor@gmail.com",
    },
    {
      key: "research_scholar",
      title: "Research",
      icon: "🔬",
      email: "research@gmail.com",
    },
    {
      key: "authority",
      title: "Authority",
      icon: "🏛️",
      email: "authority@gmail.com",
    },
    {
      key: "hospital_admin",
      title: "Hospital",
      icon: "🏥",
      email: "hospital@gmail.com",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
  "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
display: "flex",
justifyContent: "space-evenly",
alignItems: "center",
flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "520px",
          background:
  "rgba(30,41,59,0.75)",

backdropFilter:
  "blur(20px)",
          padding: "40px",
          borderRadius: "24px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "2.2rem",
          }}
        >
          🏥 Healthcare AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Sign in to access HealthIntel AI
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          {roles.map((role) => (
            <div
              key={role.key}
              onClick={() =>
                setSelectedRole(
                  role.key
                )
              }
              style={{
                background:
                  selectedRole ===
                  role.key
                    ? "#3b82f6"
                    : "#334155",
                border:
                  selectedRole ===
                  role.key
                    ? "2px solid #60a5fa"
                    : "2px solid transparent",
                borderRadius:
                  "14px",
                padding: "15px",
                textAlign:
                  "center",
                cursor: "pointer",
                transition:
                  "all 0.3s ease",
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  marginBottom:
                    "8px",
                }}
              >
                {role.icon}
              </div>

              <div
                style={{
                  fontWeight:
                    "bold",
                  marginBottom:
                    "4px",
                }}
              >
                {role.title}
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color:
                    selectedRole ===
                    role.key
                      ? "#dbeafe"
                      : "#94a3b8",
                  wordBreak:
                    "break-word",
                }}
              >
                {role.email}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#60a5fa",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Selected Portal:{" "}
          {selectedRole
            .replace("_", " ")
            .toUpperCase()}
        </div>

        <form
          onSubmit={handleLogin}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "15px",
              marginBottom:
                "15px",
              borderRadius:
                "12px",
              border:
                "1px solid #475569",
              background:
  "rgba(255,255,255,0.06)",

border:
  "1px solid rgba(255,255,255,0.08)",
              color: "white",
              boxSizing:
                "border-box",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={{
              width: "100%",
              padding: "15px",
              marginBottom:
                "20px",
              borderRadius:
                "12px",
              border:
                "1px solid #475569",
              background:
  "rgba(255,255,255,0.06)",

border:
  "1px solid rgba(255,255,255,0.08)",
              color: "white",
              boxSizing:
                "border-box",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius:
                "12px",
              background:
  "linear-gradient(135deg,#2563eb,#3b82f6)",

boxShadow:
  "0 8px 25px rgba(37,99,235,0.4)",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Login as{" "}
            {selectedRole
              .replace("_", " ")
              .toUpperCase()}
          </button>
        </form>

        <button
          onClick={() => {
  localStorage.setItem(
    "registerRole",
    selectedRole
  );

  navigate("/register");
}}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "15px",
            border: "none",
            borderRadius:
              "12px",
            background:
  "linear-gradient(135deg,#475569,#64748b)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Create New Account
        </button>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            padding: "15px",
            borderRadius: "12px",
            background:
  "rgba(255,255,255,0.06)",

border:
  "1px solid rgba(255,255,255,0.08)",
            color: "#94a3b8",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              marginBottom: "5px",
            }}
          >
            👤 Patient Portal
          </div>

          <div
            style={{
              fontSize: "14px",
            }}
          >
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;