import Sidebar from "./Sidebar";

function Layout({ children }) {
  const name =
    localStorage.getItem("name") ||
    "User";

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top right,#1e40af,#0f172a 40%)",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Premium Navbar */}

        <div
          style={{
            height: "80px",
            background:
              "rgba(30,41,59,0.75)",
            backdropFilter:
              "blur(15px)",
            borderBottom:
              "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            padding: "0 30px",
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <input
            placeholder="🔍 Search patients, reports, drugs..."
            style={{
              width: "350px",
              padding: "12px 16px",
              borderRadius: "14px",
              border:
                "1px solid rgba(255,255,255,0.08)",
              background:
                "rgba(51,65,85,0.8)",
              color: "white",
              outline: "none",
              fontSize: "14px",
            }}
          />

          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#3b82f6)",
              padding:
                "10px 18px",
              borderRadius:
                "14px",
              color: "white",
              fontWeight:
                "bold",
              boxShadow:
                "0 4px 20px rgba(37,99,235,0.4)",
            }}
          >
            👤 {name}
          </div>
        </div>

        {/* Main Content */}

        <div
          style={{
            flex: 1,
            padding: "35px",
            overflowY: "auto",
          }}
        >
          {children}

          {/* Premium Footer */}

          <footer
            style={{
              marginTop: "70px",
              padding: "35px",
              textAlign: "center",
              borderTop:
                "1px solid rgba(255,255,255,0.08)",
              color: "#94a3b8",
            }}
          >
            <h2
              style={{
                color: "white",
                marginBottom: "10px",
              }}
            >
              🏥 HealthIntel AI
            </h2>

            <p
              style={{
                marginBottom: "20px",
              }}
            >
              AI-Powered Healthcare Intelligence Platform
            </p>
            <p
  style={{
    color: "#60a5fa",
    marginTop: "10px",
  }}
>
  Version 1.0 • Built by Ishmeet Singh
</p>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "center",
                gap: "30px",
                flexWrap: "wrap",
                marginBottom: "25px",
                color: "white",
                fontWeight: "500",
              }}
            >
              <span>Dashboard</span>
              <span>Analytics</span>
              <span>Prediction</span>
              <span>Research</span>
              <span>Alerts</span>
            </div>

            <p
              style={{
                marginBottom: "20px",
              }}
            >
              © 2026 Ishmeet Singh | HealthIntel AI
              <br />
              All Rights Reserved.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://github.com/ISHMEETSINGH1311"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  background:
                    "#2563eb",
                  padding:
                    "10px 20px",
                  borderRadius:
                    "10px",
                  textDecoration:
                    "none",
                  fontWeight:
                    "bold",
                }}
              >
                🐙 GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ishmeet-singh-a2b7a1391/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                  background:
                    "#0A66C2",
                  padding:
                    "10px 20px",
                  borderRadius:
                    "10px",
                  textDecoration:
                    "none",
                  fontWeight:
                    "bold",
                }}
              >
                💼 LinkedIn
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout;