import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function ResearchDashboard() {
  const [cases, setCases] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [investigations, setInvestigations] = useState([]);
  const [finding, setFinding] = useState("");
const [recommendation, setRecommendation] =
  useState("");

  useEffect(() => {
    fetchCases();
    fetchClusters();
    fetchInvestigations();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await api.get("/cases/all");
      setCases(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchClusters = async () => {
    try {
      const response = await api.get("/clusters/all");
      setClusters(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchInvestigations = async () => {
    try {
      const response = await api.get(
        "/investigations/all"
      );

      setInvestigations(
        response.data
      );

    } catch (error) {
      console.log(error);
    }
  };

  const startInvestigation = async (id) => {
    try {
      await api.put(
        `/investigations/start/${id}`
      );

      fetchInvestigations();

    } catch (error) {
      console.log(error);
    }
  };

  const completeInvestigation = async (id) => {
    try {
      await api.put(
        `/investigations/complete/${id}`
      );

      fetchInvestigations();

    } catch (error) {
      console.log(error);
    }
  };
  const submitFinding = async (
  investigation
) => {
  try {

    await api.post(
      "/research-findings/create",
      {
        cluster_region:
          investigation.region,

        symptoms:
          investigation.symptoms,

        finding,

        recommendation,

        researcher_name:
          localStorage.getItem(
            "name"
          ),
      }
    );

    alert(
      "Finding Submitted!"
    );

    setFinding("");
    setRecommendation("");

  } catch (error) {

    console.log(error);

    alert(
      "Failed to Submit Finding"
    );
  }
};

  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        <h1>
          🔬 Research Scholar Dashboard
        </h1>

        <h2
          style={{
            color: "#ff4d4d",
            marginTop: "20px",
          }}
        >
          ⚠ Disease Cluster Alerts
        </h2>

        {clusters.length === 0 ? (
          <p style={{ color: "white" }}>
            No disease clusters detected.
          </p>
        ) : (
          clusters.map((cluster, index) => (
            <div
              key={index}
              style={{
                background: "#7f1d1d",
                color: "white",
                padding: "20px",
                borderRadius: "15px",
                marginTop: "15px",
              }}
            >
              <h3>
                Region: {cluster.region}
              </h3>

              <p>
                Symptoms: {cluster.symptoms}
              </p>

              <p>
                Cases: {cluster.cases}
              </p>
            </div>
          ))
        )}

        <h2
          style={{
            color: "#facc15",
            marginTop: "30px",
          }}
        >
          🔬 Investigation Queue
        </h2>

        <p
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Total Investigations:
          {" "}
          {investigations.length}
        </p>

        {investigations.length === 0 ? (
          <div
            style={{
              background: "#1e293b",
              color: "white",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "15px",
            }}
          >
            No investigations found.
          </div>
        ) : (
          investigations.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#1e293b",
                color: "white",
                padding: "20px",
                marginTop: "15px",
                borderRadius: "15px",
                border: "2px solid #facc15",
              }}
            >
              <h3>
                Region:
                {" "}
                {item.region}
              </h3>

              <p>
                Symptoms:
                {" "}
                {item.symptoms}
              </p>

              <p>
                Cases:
                {" "}
                {item.cases}
              </p>

              <p>
                Status:
                {" "}
                {item.status}
              </p>

              <div
                style={{
                  marginTop: "15px",
                }}
              >
                {item.status ===
                  "Pending Investigation" && (
                  <button
                    onClick={() =>
                      startInvestigation(
                        item.id
                      )
                    }
                  >
                    Start Investigation
                  </button>
                )}

                {item.status ===
                  "Under Review" && (
                  <button
                    onClick={() =>
                      completeInvestigation(
                        item.id
                      )
                    }
                  >
                    Complete Investigation
                  </button>
                )}

                {item.status ===
  "Completed" && (
  <div>
    <p
      style={{
        color: "#22c55e",
        fontWeight: "bold",
      }}
    >
      ✅ Investigation Completed
    </p>

    <textarea
      placeholder="Research Finding"
      value={finding}
      onChange={(e) =>
        setFinding(
          e.target.value
        )
      }
      style={{
        width: "100%",
        marginTop: "10px",
        padding: "10px",
      }}
    />

    <textarea
      placeholder="Recommendation"
      value={recommendation}
      onChange={(e) =>
        setRecommendation(
          e.target.value
        )
      }
      style={{
        width: "100%",
        marginTop: "10px",
        padding: "10px",
      }}
    />

    <button
      onClick={() =>
        submitFinding(item)
      }
      style={{
        marginTop: "10px",
      }}
    >
      Submit Finding
    </button>
  </div>
)}
              </div>
            </div>
          ))
        )}

        <h2
          style={{
            color: "white",
            marginTop: "30px",
          }}
        >
          Potential Disease Reports
        </h2>

        {cases.map((report) => (
          <div
            key={report.id}
            style={{
              background: "#1e293b",
              color: "white",
              padding: "20px",
              marginTop: "15px",
              borderRadius: "15px",
            }}
          >
            <p>
              <strong>Drug:</strong>
              {" "}
              {report.drug}
            </p>

            <p>
              <strong>Symptoms:</strong>
              {" "}
              {report.symptoms}
            </p>

            <p>
              <strong>Region:</strong>
              {" "}
              {report.region}
            </p>

            <p>
              <strong>Severity:</strong>
              {" "}
              {report.severity}
            </p>

            <p>
              <strong>Hospital:</strong>
              {" "}
              {report.hospital}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ResearchDashboard;