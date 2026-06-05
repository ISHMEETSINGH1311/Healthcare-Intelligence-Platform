import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function CommandCenter() {
  const [totalCases, setTotalCases] =
    useState(0);

  const [investigations, setInvestigations] =
    useState([]);

  const [findings, setFindings] =
    useState([]);

  const [alerts, setAlerts] =
    useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const casesRes =
        await api.get(
          "/analytics/total-cases"
        );

      const investigationsRes =
        await api.get(
          "/investigations/all"
        );

      const findingsRes =
        await api.get(
          "/research-findings/all"
        );

      const alertsRes =
        await api.get(
          "/national-alerts/all"
        );

      setTotalCases(
        casesRes.data.total_cases
      );

      setInvestigations(
        investigationsRes.data
      );

      setFindings(
        findingsRes.data
      );

      setAlerts(
        alertsRes.data
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div
        style={{
          padding: "30px",
          color: "white",
        }}
      >
        <h1>
          🌍 National Disease
          Command Center
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background:
                "#1e293b",
              padding: "25px",
              borderRadius:
                "15px",
              width: "250px",
              minWidth: "250px",
            }}
          >
            <h3>
              📊 Total Cases
            </h3>

            <h1>
              {totalCases}
            </h1>
          </div>

          <div
            style={{
              background:
                "#1e293b",
              padding: "25px",
              borderRadius:
                "15px",
              width: "250px",
              minWidth: "250px",
            }}
          >
            <h3>
              🔬 Investigations
            </h3>

            <h1>
              {
                investigations.length
              }
            </h1>
          </div>

          <div
            style={{
              background:
                "#1e293b",
              padding: "25px",
              borderRadius:
                "15px",
              width: "250px",
                minWidth: "250px",
            }}
          >
            <h3>
              🧪 Findings
            </h3>

            <h1>
              {
                findings.length
              }
            </h1>
          </div>

          <div
            style={{
              background:
                "#991b1b",
              padding: "25px",
              borderRadius:
                "15px",
              width: "250px",
                minWidth: "250px",
            }}
          >
            <h3>
              🚨 Alerts
            </h3>

            <h1>
              {alerts.length}
            </h1>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>
            🚨 Active National
            Alerts
          </h2>

          {alerts.map(
            (alert) => (
              <div
                key={alert.id}
                style={{
                  background:
                    "#7f1d1d",
                  padding:
                    "20px",
                  borderRadius:
                    "15px",
                  marginTop:
                    "15px",
                }}
              >
                <h3>
                  {
                    alert.region
                  }
                </h3>

                <p>
                  Symptoms:
                  {" "}
                  {
                    alert.symptoms
                  }
                </p>

                <p>
                  Severity:
                  {" "}
                  {
                    alert.severity
                  }
                </p>

                <p>
                  Alert:
                  {" "}
                  {
                    alert.alert_message
                  }
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CommandCenter;