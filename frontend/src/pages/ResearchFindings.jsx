import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function ResearchFindings() {
  const [findings, setFindings] = useState([]);

  useEffect(() => {
    fetchFindings();
  }, []);

  const fetchFindings = async () => {
    try {
      const response = await api.get(
        "/research-findings/all"
      );

      setFindings(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        <h1>
          🔬 Research Findings
        </h1>

        {findings.length === 0 ? (
          <p style={{ color: "white" }}>
            No findings submitted yet.
          </p>
        ) : (
          findings.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#1e293b",
                color: "white",
                padding: "20px",
                marginTop: "20px",
                borderRadius: "15px",
              }}
            >
              <h2>
                {item.cluster_region}
              </h2>

              <p>
                Symptoms:
                {" "}
                {item.symptoms}
              </p>

              <p>
                Finding:
                {" "}
                {item.finding}
              </p>

              <p>
                Recommendation:
                {" "}
                {item.recommendation}
              </p>

              <p>
                Researcher:
                {" "}
                {item.researcher_name}
              </p>
            </div>
          ))
        )}
      </div>
    </Layout>
  );
}

export default ResearchFindings;