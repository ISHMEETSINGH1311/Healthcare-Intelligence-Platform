import Layout from "../components/Layout";

function Analytics() {
  return (
    <Layout>
      <div
        style={{
          padding: "30px",
          color: "white",
        }}
      >
        <h1>
          📊 Analytics Center
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2>💊 Drug Analytics</h2>

            <p>
              View top drugs and
              adverse event reports.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2>⚠ Severity Analytics</h2>

            <p>
              Monitor Mild,
              Moderate and Severe
              cases.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2>📍 Region Analytics</h2>

            <p>
              Track healthcare
              reports by region.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2>🤖 AI Analytics</h2>

            <p>
              Analyze AI risk
              prediction results.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Analytics;