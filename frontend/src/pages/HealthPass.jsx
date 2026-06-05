import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../components/Layout";

function HealthPass() {
const [records, setRecords] = useState([]);
const [search, setSearch] = useState("");

const [form, setForm] = useState({
patient_name: "",
age: "",
gender: "",
blood_group: "",
allergies: "",
conditions: "",
medications: "",
vaccinations: "",
emergency_contact: "",
});

useEffect(() => {
fetchRecords();
}, []);

const fetchRecords = async () => {
try {
const response = await api.get("/health-pass/all");
setRecords(response.data);
} catch (error) {
console.log(error);
}
};

const deleteRecord = async (id) => {
try {
await api.delete(`/health-pass/${id}`);
alert("Record Deleted");
fetchRecords();
} catch (error) {
console.log(error);
}
};

const handleSubmit = async (e) => {
e.preventDefault();

```
try {
  await api.post("/health-pass/create", {
    ...form,
    age: Number(form.age),
  });

  alert("Health Pass Created");

  setForm({
    patient_name: "",
    age: "",
    gender: "",
    blood_group: "",
    allergies: "",
    conditions: "",
    medications: "",
    vaccinations: "",
    emergency_contact: "",
  });

  fetchRecords();
} catch (error) {
  console.log(error);
  alert("Failed");
}
```

};

const inputStyle = {
width: "100%",
padding: "12px",
borderRadius: "10px",
border: "1px solid #475569",
background: "#0f172a",
color: "white",
boxSizing: "border-box",
};

return ( <Layout>
<div style={{ padding: "30px" }}>
<h1
style={{
color: "white",
marginBottom: "20px",
}}
>
🏥 Patient Health Pass </h1>

```
    <button
      onClick={() =>
        setForm({
          patient_name: "",
          age: "",
          gender: "",
          blood_group: "",
          allergies: "",
          conditions: "",
          medications: "",
          vaccinations: "",
          emergency_contact: "",
        })
      }
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "10px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      + New Health Pass
    </button>

    <form
      onSubmit={handleSubmit}
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <input
          style={inputStyle}
          placeholder="Patient Name"
          value={form.patient_name}
          onChange={(e) =>
            setForm({
              ...form,
              patient_name: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Age"
          value={form.age}
          onChange={(e) =>
            setForm({
              ...form,
              age: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Gender"
          value={form.gender}
          onChange={(e) =>
            setForm({
              ...form,
              gender: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Blood Group"
          value={form.blood_group}
          onChange={(e) =>
            setForm({
              ...form,
              blood_group: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Allergies"
          value={form.allergies}
          onChange={(e) =>
            setForm({
              ...form,
              allergies: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Conditions"
          value={form.conditions}
          onChange={(e) =>
            setForm({
              ...form,
              conditions: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Medications"
          value={form.medications}
          onChange={(e) =>
            setForm({
              ...form,
              medications: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Vaccinations"
          value={form.vaccinations}
          onChange={(e) =>
            setForm({
              ...form,
              vaccinations: e.target.value,
            })
          }
        />

        <input
          style={inputStyle}
          placeholder="Emergency Contact"
          value={form.emergency_contact}
          onChange={(e) =>
            setForm({
              ...form,
              emergency_contact: e.target.value,
            })
          }
        />
      </div>

      <br />

      <button
        type="submit"
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Save Health Pass
      </button>
    </form>

    <div
      style={{
        height: "1px",
        background: "#475569",
        margin: "30px 0",
      }}
    />

    <input
      type="text"
      placeholder="Search Patient..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "20px",
        borderRadius: "10px",
        border: "1px solid #334155",
        background: "#1e293b",
        color: "white",
      }}
    />

    <h2>Saved Records</h2>

    {records
      .filter((record) =>
        record.patient_name
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .map((record) => (
        <div
          key={record.id}
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "15px",
            color: "white",
          }}
        >
          <h3>{record.patient_name}</h3>

          <p>Age: {record.age}</p>

          <p>Blood Group: {record.blood_group}</p>

          <p>Conditions: {record.conditions}</p>

          <p>Medications: {record.medications}</p>

          <button
            onClick={() => deleteRecord(record.id)}
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Delete Record
          </button>
        </div>
      ))}
  </div>
</Layout>


);
}

export default HealthPass;
