import { useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function PatientProfile() {
    const [patientName, setPatientName] =
  useState("");

const [healthPass, setHealthPass] =
  useState(null);

const [visits, setVisits] =
  useState([]);
  const searchPatient = async () => {
  try {

    const healthResponse =
      await api.get(
        `/health-pass/${patientName}`
      );

    const visitResponse =
      await api.get(
        `/timeline/patient/${patientName}`
      );

    setHealthPass(
      healthResponse.data
    );

    setVisits(
      visitResponse.data
    );

  } catch (error) {
    console.log(error);

    alert(
      "Patient not found"
    );
  }
};
  return (
    <Layout>
      <div style={{ padding: "30px" }}>
        <div
  style={{
    marginBottom: "20px",
  }}
>
  <input
    placeholder="Enter Patient Name"
    value={patientName}
    onChange={(e) =>
      setPatientName(
        e.target.value
      )
    }
    style={{
      padding: "10px",
      width: "300px",
    }}
  />

  <button
    onClick={searchPatient}
    style={{
      marginLeft: "10px",
      padding: "10px",
    }}
  >
    Search
  </button>
</div>
        <h1>👤 Patient Profile</h1>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <h2>🏥 Health Pass</h2>
          {healthPass && (
  <>
    <p>
      Age: {healthPass.age}
    </p>

    <p>
      Gender:
      {" "}
      {healthPass.gender}
    </p>

    <p>
      Blood Group:
      {" "}
      {healthPass.blood_group}
    </p>

    <p>
      Conditions:
      {" "}
      {healthPass.conditions}
    </p>
  </>
)}
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          <h2>📅 Visit History</h2>
          {visits.map((visit) => (
  <div
    key={visit.id}
    style={{
      marginBottom: "15px",
    }}
  >
    <strong>
      {visit.visit_date}
    </strong>

    <br />

    {visit.diagnosis}
  </div>
))}
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            color: "white",
          }}
        >
          <h2>🧠 AI Risk Prediction</h2>
          <p>Future prediction will appear here</p>
        </div>
      </div>
    </Layout>
  );
}

export default PatientProfile;