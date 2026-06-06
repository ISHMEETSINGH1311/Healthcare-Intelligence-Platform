import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaChartPie,
  FaFileMedical,
  FaBrain,
  FaHospital,
  FaHistory,
  FaUserMd,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location =
    useLocation();

  const role =
    localStorage.getItem("role");

  const name =
    localStorage.getItem("name") ||
    "User";

  const getLinkStyle = (
    path
  ) => ({
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px",
    borderRadius: "14px",
    fontWeight: "500",
    transition:
      "all 0.3s ease",

    background:
      location.pathname === path
        ? "linear-gradient(135deg,#2563eb,#3b82f6)"
        : "rgba(255,255,255,0.05)",

    border:
      location.pathname === path
        ? "1px solid #3b82f6"
        : "1px solid rgba(255,255,255,0.05)",

    boxShadow:
      location.pathname === path
        ? "0 0 25px rgba(59,130,246,0.45)"
        : "none",
  });

  return (
    <div
      style={{
        width: "300px",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#0f172a,#1e293b)",
        color: "white",
        padding: "25px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent:
          "space-between",
        borderRight:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div>
        {/* Logo Section */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              fontSize: "55px",
              marginBottom: "10px",
            }}
          >
            🧠
          </div>

          <h2
            style={{
              margin: 0,
              color: "white",
            }}
          >
            HealthIntel AI
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "12px",
              marginTop: "8px",
            }}
          >
            Healthcare Intelligence Platform
          </p>
        </div>

        {/* Profile Card */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#334155,#475569)",
            padding: "18px",
            borderRadius: "18px",
            marginBottom: "15px",
            textAlign: "center",
            boxShadow:
              "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            {role === "doctor"
              ? "🩺"
              : role ===
                "research_scholar"
              ? "🔬"
              : role ===
                "authority"
              ? "🏛️"
              : "🏥"}
          </div>

          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "5px",
            }}
          >
            {name}
          </div>

          <div
            style={{
              color: "#cbd5e1",
              fontSize: "14px",
              textTransform:
                "capitalize",
            }}
          >
            {role?.replace(
              "_",
              " "
            )}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#60a5fa",
            marginBottom: "25px",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          AI Powered Healthcare
          Surveillance
        </div>

        {/* Navigation */}

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "15px",
          }}
        >
          {role === "doctor" && (
            <>
              <Link
                to="/dashboard"
                style={getLinkStyle(
                  "/dashboard"
                )}
              >
                <FaChartPie />
                Dashboard
              </Link>

              <Link
                to="/case-report"
                style={getLinkStyle(
                  "/case-report"
                )}
              >
                <FaFileMedical />
                Case Reports
              </Link>

              <Link
                to="/health-pass"
                style={getLinkStyle(
                  "/health-pass"
                )}
              >
                <FaUserMd />
                Health Pass
              </Link>

              <Link
                to="/timeline"
                style={getLinkStyle(
                  "/timeline"
                )}
              >
                <FaHistory />
                Visit Timeline
              </Link>

              <Link
                to="/patient-profile"
                style={getLinkStyle(
                  "/patient-profile"
                )}
              >
                👤 Patient Profile
              </Link>
            </>
          )}

          {role ===
            "research_scholar" && (
            <>
              <Link
                to="/research-dashboard"
                style={getLinkStyle(
                  "/research-dashboard"
                )}
              >
                🔬 Research Dashboard
              </Link>

              <Link
                to="/analytics"
                style={getLinkStyle(
                  "/analytics"
                )}
              >
                <FaHospital />
                Analytics
              </Link>

              <Link
                to="/prediction"
                style={getLinkStyle(
                  "/prediction"
                )}
              >
                <FaBrain />
                AI Prediction
              </Link>

              <Link
                to="/research-findings"
                style={getLinkStyle(
                  "/research-findings"
                )}
              >
                📄 Research Findings
              </Link>
            </>
          )}

          {role === "authority" && (
            <>
              <Link
                to="/authority-dashboard"
                style={getLinkStyle(
                  "/authority-dashboard"
                )}
              >
                🏛 Authority Dashboard
              </Link>

              <Link
                to="/command-center"
                style={getLinkStyle(
                  "/command-center"
                )}
              >
                🌍 Command Center
              </Link>

              <Link
                to="/national-alerts"
                style={getLinkStyle(
                  "/national-alerts"
                )}
              >
                🚨 National Alerts
              </Link>
            </>
          )}

          {role ===
            "hospital_admin" && (
            <>
              <Link
                to="/dashboard"
                style={getLinkStyle(
                  "/dashboard"
                )}
              >
                <FaChartPie />
                Hospital Dashboard
              </Link>

              <Link
                to="/case-report"
                style={getLinkStyle(
                  "/case-report"
                )}
              >
                <FaFileMedical />
                Case Reports
              </Link>

              <Link
                to="/patient-profile"
                style={getLinkStyle(
                  "/patient-profile"
                )}
              >
                👤 Patient Records
              </Link>

              <Link
                to="/analytics"
                style={getLinkStyle(
                  "/analytics"
                )}
              >
                📊 Hospital Analytics
              </Link>
            </>
          )}
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        style={{
          width: "100%",
          padding: "14px",
          border: "none",
          borderRadius: "14px",
          background:
            "linear-gradient(135deg,#dc2626,#ef4444)",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent:
            "center",
          gap: "10px",
          boxShadow:
            "0 4px 15px rgba(220,38,38,0.3)",
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;