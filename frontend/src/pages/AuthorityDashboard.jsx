import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function AuthorityDashboard() {
  const [findings, setFindings] = useState([]);

  useEffect(() => {
    fetchFindings();
  }, []);

  const fetchFindings = async () => {
    try {
      const response = await api.get(
        "/research-findings/all"
      );

      setFindings(
        response.data
      );

    } catch (error) {
      console.log(error);
    }
  };

  const generateAlert = async (
    finding
  ) => {
    try {

      await api.post(
        "/national-alerts/create",
        {
          region:
            finding.cluster_region,

          symptoms:
            finding.symptoms,

          alert_message:
            finding.recommendation,

          severity:
            "High",
        }
      );

      alert(
        "National Alert Generated!"
      );

    } catch (error) {
      console.log(error);
      alert(
        "Failed to Generate Alert"
      );
    }
  };

  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        <h1>
          🏛 Authority Dashboard
        </h1>

        <h2
          style={{
            color: "white",
            marginTop: "20px",
          }}
        >
          Research Findings
        </h2>

        {findings.length === 0 ? (
          <p style={{ color: "white" }}>
            No findings available.
          </p>
        ) : (
          findings.map(
            (item) => (
              <div
                key={item.id}
                style={{
                  background:
                    "#7f1d1d",
                  color: "white",
                  padding: "20px",
                  marginTop: "15px",
                  borderRadius:
                    "15px",
                }}
              >
                <h3>
                  Region:
                  {" "}
                  {
                    item.cluster_region
                  }
                </h3>

                <p>
                  Symptoms:
                  {" "}
                  {
                    item.symptoms
                  }
                </p>

                <p>
                  Finding:
                  {" "}
                  {
                    item.finding
                  }
                </p>

                <p>
                  Recommendation:
                  {" "}
                  {
                    item.recommendation
                  }
                </p>

                <p>
                  Researcher:
                  {" "}
                  {
                    item.researcher_name
                  }
                </p>

                <button
                  onClick={() =>
                    generateAlert(
                      item
                    )
                  }
                  style={{
                    marginTop:
                      "15px",
                    padding:
                      "10px 20px",
                    border:
                      "none",
                    borderRadius:
                      "10px",
                    background:
                      "#dc2626",
                    color:
                      "white",
                    cursor:
                      "pointer",
                    fontWeight:
                      "bold",
                  }}
                >
                  🚨 Generate Alert
                </button>
              </div>
            )
          )
        )}
      </div>
    </Layout>
  );
}

export default AuthorityDashboard;