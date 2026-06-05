import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../components/Layout";

function VisitTimeline() {
  const [visits, setVisits] = useState([]);
const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    patient_name: "",
    visit_date: "",
    doctor: "",
    diagnosis: "",
    notes: "",
  });

  useEffect(() => {
    fetchVisits();
  }, []);

  const fetchVisits = async () => {
    try {
      const response = await api.get(
        "/timeline/all"
      );

      setVisits(response.data);

    } catch (error) {
      console.log(error);
    }
  };
  const deleteVisit = async (id) => {
  try {
    await api.delete(`/timeline/${id}`);

    alert("Visit Deleted");

    fetchVisits();

  } catch (error) {
    console.log(error);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
  !form.patient_name ||
  !form.visit_date ||
  !form.doctor ||
  !form.diagnosis
) {
  alert("Please fill all required fields");
  return;
}

    try {
      await api.post(
        "/timeline/create",
        form
      );

      alert("Visit Added");

      setForm({
        patient_name: "",
        visit_date: "",
        doctor: "",
        diagnosis: "",
        notes: "",
      });

      fetchVisits();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "30px" }}>

        <h1>📅 Visit Timeline</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >

          <input
            placeholder="Patient Name"
            value={form.patient_name}
            onChange={(e) =>
              setForm({
                ...form,
                patient_name: e.target.value,
              })
            }
          />

          <br /><br />

          <input
            type="date"
            value={form.visit_date}
            onChange={(e) =>
              setForm({
                ...form,
                visit_date: e.target.value,
              })
            }
          />

          <br /><br />

          <input
            placeholder="Doctor"
            value={form.doctor}
            onChange={(e) =>
              setForm({
                ...form,
                doctor: e.target.value,
              })
            }
          />

          <br /><br />

          <input
            placeholder="Diagnosis"
            value={form.diagnosis}
            onChange={(e) =>
              setForm({
                ...form,
                diagnosis: e.target.value,
              })
            }
          />

          <br /><br />

          <textarea
            placeholder="Notes"
            value={form.notes}
            onChange={(e) =>
              setForm({
                ...form,
                notes: e.target.value,
              })
            }
          />

          <br /><br />

          <button type="submit">
            Add Visit
          </button>
          <button
  type="button"
  onClick={() =>
    setForm({
      patient_name: "",
      visit_date: "",
      doctor: "",
      diagnosis: "",
      notes: "",
    })
  }
  style={{
    marginLeft: "10px",
    padding: "10px",
    cursor: "pointer",
  }}
>
  New Visit
</button>

        </form>
        <input
  type="text"
  placeholder="Search Patient..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "10px",
  }}
/>

        <h2>Patient Visits</h2>

        {visits
  .filter((visit) =>
    visit.patient_name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((visit) => (
          <div
            key={visit.id}
            style={{
              background: "#1e293b",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "15px",
              color: "white",
            }}
          >
            <h3>
              {visit.patient_name}
            </h3>

            <p>
              Date:
              {" "}
              {visit.visit_date}
            </p>

            <p>
              Doctor:
              {" "}
              {visit.doctor}
            </p>

            <p>
              Diagnosis:
              {" "}
              {visit.diagnosis}
            </p>

            <p>
              Notes:
              {" "}
              {visit.notes}
            </p>
            <button
  onClick={() =>
    deleteVisit(visit.id)
  }
  style={{
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Delete Visit
</button>

          </div>
        ))}
      </div>
    </Layout>
  );
}

export default VisitTimeline;