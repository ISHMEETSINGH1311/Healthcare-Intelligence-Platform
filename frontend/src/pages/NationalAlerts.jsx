import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function NationalAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    try {
      const response = await api.get(
        "/national-alerts/all"
      );

      setAlerts(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        <h1>
          🚨 National Disease Alerts
        </h1>

        {alerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              background: "#991b1b",
              color: "white",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "15px",
            }}
          >
            <h2>
              {alert.region}
            </h2>

            <p>
              Symptoms:
              {" "}
              {alert.symptoms}
            </p>

            <p>
              Severity:
              {" "}
              {alert.severity}
            </p>

            <p>
              Alert:
              {" "}
              {alert.alert_message}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default NationalAlerts;