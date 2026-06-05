import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";
import {
  FaChartPie,
  FaFileMedical,
  FaBrain,
  FaHospital,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "25px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2
          style={{
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          🏥 Healthcare AI
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Link
            to="/dashboard"
            style={linkStyle}
          >
            <FaChartPie />
            Dashboard
          </Link>

          <Link
            to="/case-report"
            style={linkStyle}
          >
            <FaFileMedical />
            Case Reports
          </Link>

          <Link
            to="/prediction"
            style={linkStyle}
          >
            <FaBrain />
            AI Prediction
          </Link>

          <Link
            to="/health-pass"
            style={linkStyle}
          >
            <FaUserMd />
            Health Pass
          </Link>

          <Link
            to="/analytics"
            style={linkStyle}
          >
            <FaHospital />
            Analytics
          </Link>

          <Link
            to="/timeline"
            style={linkStyle}
          >
            <FaHistory />
            Visit Timeline
          </Link>

          <Link
            to="/patient-profile"
            style={linkStyle}
          >
            👤 Patient Profile
          </Link>
          <Link
  to="/research-dashboard"
  style={linkStyle}
>
  🔬 Research Dashboard
</Link>
<Link
  to="/authority-dashboard"
  style={linkStyle}
>
  🏛 Authority Dashboard
</Link>

<Link
  to="/command-center"
  style={linkStyle}
>
  🌍 Command Center
</Link>
          <Link
  to="/national-alerts"
  style={linkStyle}
>
  🚨 National Alerts
</Link>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          localStorage.removeItem("name");

          window.location.href = "/";
        }}
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "10px",
          background: "#dc2626",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px",
  borderRadius: "10px",
  background: "#334155",
};

export default Sidebar;