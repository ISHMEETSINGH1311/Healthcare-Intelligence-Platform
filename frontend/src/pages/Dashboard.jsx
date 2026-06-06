import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

function Dashboard() {
  const navigate = useNavigate();

  const [totalCases, setTotalCases] = useState(0);
  const [topDrugs, setTopDrugs] = useState([]);
  const [severityData, setSeverityData] = useState([]);
  const [predictionHistory, setPredictionHistory] = useState([]);
  const [highRiskDrugs, setHighRiskDrugs] = useState([]);
  const [regionData, setRegionData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [alerts, setAlerts] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const totalRes = await api.get(
        "/analytics/total-cases"
      );

      const regionRes = await api.get(
        "/analytics/cases-by-region"
      );

      const drugsRes = await api.get(
        "/analytics/top-drugs"
      );

      const severityRes = await api.get(
        "/analytics/severity-distribution"
      );
      

      const historyRes = await api.get(
        "/prediction/history"
      );

      const highRiskRes = await api.get(
        "/analytics/high-risk-drugs"
      );

      const monthlyRes = await api.get(
        "/analytics/monthly-trends"
      );
      const alertsRes = await api.get(
  "/national-alerts/all"
);

setAlerts(
  alertsRes.data
);

      setTotalCases(
        totalRes.data.total_cases
      );

      setTopDrugs(
        drugsRes.data
      );

      setSeverityData(
        severityRes.data
      );

      setPredictionHistory(
        historyRes.data
      );

      setHighRiskDrugs(
        highRiskRes.data
      );

      setRegionData(
        regionRes.data
      );

      setMonthlyData(
        monthlyRes.data
      );

    } catch (error) {
      console.log(error);
    }
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A855F7",
  ];

  return (
    <Layout>
      <div
        style={{
          padding: "40px",
          minHeight: "100vh",
          color:"white",
        }}
      >
       <div
  style={{
    display: "flex",
    justifyContent:
      "space-between",
    alignItems: "center",
    marginBottom: "40px",
    padding: "30px",
    borderRadius: "20px",
   background:
"linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.3)",
  }}
>
  <div>
    <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "30px",
  }}
>
  <div style={statusCard}>
    🟢 System Online
  </div>

  <div style={statusCard}>
    🔒 Secure Network
  </div>

  <div style={statusCard}>
    🤖 AI Active
  </div>

  <div style={statusCard}>
    📡 Real-Time Monitoring
  </div>
</div>
    <h1
      style={{
        fontSize: "56px",
fontWeight: "800",
lineHeight: "1",
        margin: 0,
      }}
    >
      🏥 HealthIntel AI
    </h1>

    <p
      style={{
        color: "#dbeafe",
marginTop: "12px",
        fontSize: "18px",
      }}
    >
      AI-Powered Healthcare Monitoring,
Drug Safety Intelligence,
Research Analytics & National Surveillance
    </p>
  </div>

  <button
    onClick={() =>
      navigate("/case-report")
    }
    style={{
      padding:
        "14px 28px",
      border: "none",
      borderRadius:
        "12px",
      cursor: "pointer",
     background:
"linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
      color: "white",
      fontWeight: "bold",
    }}
  >
    ➕ Submit New Case
  </button>
</div>
          
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              border: "1px solid #334155",
background:
"linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              borderRadius: "16px",
              padding: "20px",
              width: "280px",
              textAlign: "center",
            }}
          >
            <h3>Total Cases</h3>

            <h1
              style={{
              fontSize: "56px",
fontWeight: "800",
lineHeight: "1",
              }}
            >
              {totalCases}
            </h1>
          </div>

          <div
            style={{
              border: "1px solid #334155",
              transition: "all 0.3s ease",
cursor: "pointer",
background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              borderRadius: "12px",
              padding: "20px",
              width: "280px",
              textAlign: "center",
            }}
          >
            <h3>Top Drug</h3>

            <h2>
              {topDrugs.length > 0
                ? topDrugs[0].drug
                : "N/A"}
            </h2>

            <p>
              Reports:{" "}
              {topDrugs.length > 0
                ? topDrugs[0].count
                : 0}
            </p>
          </div>
          <div
  style={{
    border: "1px solid #334155",


    background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
    boxShadow:
      "0 4px 15px rgba(0,0,0,0.2)",
    borderRadius: "16px",
    padding: "20px",
    width: "280px",
    textAlign: "center",
  }}
>
  <h3>AI Predictions</h3>

  <h1
    style={{
      fontSize: "56px",
fontWeight: "800",
lineHeight: "1",
    }}
  >
    {predictionHistory.length}
  </h1>
</div>

          <div
            style={{
              border: "1px solid #334155",
              transition: "all 0.3s ease",
cursor: "pointer",
background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              borderRadius: "16px",
              padding: "20px",
              width: "420px",
              height: "400px",
            }}
          >
            <h3>
              Severity Distribution
            </h3>

            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <PieChart>
                <Pie
                  data={severityData}
                  dataKey="count"
                  nameKey="severity"
                  outerRadius={120}
                  label
                >
                  {severityData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index %
                            COLORS.length
                          ]
                        }
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div
  style={{
    marginTop: "40px",
  }}
>
  <h2>
    🚨 Active National Alerts
  </h2>

  {alerts.length === 0 ? (
    <p>
      No active alerts.
    </p>
  ) : (
    alerts.map((alert) => (
      <div
        key={alert.id}
        style={{
          background: "#991b1b",
          color: "white",
          padding: "20px",
          marginBottom: "15px",
          borderRadius: "15px",
          maxWidth: "700px",
        }}
      >
        <h3>
          {alert.region}
        </h3>

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
    ))
  )}
</div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>
            Recent AI Predictions
          </h2>

          {predictionHistory.map(
            (item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #334155",
                  transition: "all 0.3s ease",
cursor: "pointer",
background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  maxWidth: "500px",
                }}
              >
                <p>
                  <strong>Drug:</strong>{" "}
                  {item.drug}
                </p>

                <p>
                  <strong>Age:</strong>{" "}
                  {item.patient_age}
                </p>

                <p>
                  <strong>Gender:</strong>{" "}
                  {item.gender}
                </p>

                <p>
                  <strong>Duration:</strong>{" "}
                  {item.duration_days}
                </p>

                <p>
                  <strong>
                    Predicted Severity:
                  </strong>{" "}
                  {item.predicted_severity}
                </p>
              </div>
            )
          )}
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>
            🚨 High Risk Drugs
          </h2>

          {highRiskDrugs.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #334155",
background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  padding: "15px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  maxWidth: "500px",
                }}
              >
                <h3>
                  {item.drug}
                </h3>

                <p>
                  Severe Cases:{" "}
                  {item.severe_cases}
                </p>
              </div>
            )
          )}
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>
            📍 Cases By Region
          </h2>

          <div
            style={{
              border: "1px solid #334155",
              transition: "all 0.3s ease",
cursor: "pointer",
background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              borderRadius: "16px",
              padding: "20px",
              width: "700px",
              height: "400px",
            }}
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={regionData}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
  dataKey="region"
  tick={{
    fill: "#ffffff",
    fontSize: 14,
  }}
/>

                <Tooltip />

                <Bar
                  dataKey="count"
                  fill="#3b82f6"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>
            📈 Monthly Trends
          </h2>

          <div
            style={{
              border: "1px solid #334155",
              
background:
"rgba(30,41,59,0.85)",

backdropFilter:
"blur(15px)",
boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              borderRadius: "16px",
              padding: "20px",
              width: "700px",
              height: "400px",
            }}
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <LineChart
                data={monthlyData}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
  dataKey="date"
  tickFormatter={(value) => {
    const date = new Date(value);

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
      }
    );
  }}
/>

                <YAxis
  tick={{
    fill: "#ffffff",
    fontSize: 14,
  }}
  axisLine={{
    stroke: "#64748b",
  }}
/>

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </Layout>
  );
}
const statusCard = {
  background:
    "rgba(255,255,255,0.08)",
  backdropFilter:
    "blur(12px)",
  padding: "12px 20px",
  borderRadius: "14px",
  border:
    "1px solid rgba(255,255,255,0.08)",
  color: "white",
  fontWeight: "600",
};
export default Dashboard;