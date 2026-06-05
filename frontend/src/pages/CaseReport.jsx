import { useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function CaseReport() {
  const [form, setForm] = useState({
    patient_age: "",
    gender: "",
    drug: "",
    dosage: "",
    duration_days: "",
    symptoms: "",
    severity: "",
    hospital: "",
    region: "",
    outcome: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/cases/create", {
        ...form,
        patient_age: Number(
          form.patient_age
        ),
        duration_days: Number(
          form.duration_days
        ),
      });

      alert(
        "Case Submitted Successfully!"
      );
    } catch (error) {
      console.log(error);

      alert("Submission Failed");
    }
  };

  return (
    <Layout>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <h1>
          🏥 Submit Case Report
        </h1>

        <form
          onSubmit={handleSubmit}
        >
          {Object.keys(form).map(
            (field) => (
              <div
                key={field}
                style={{
                  marginBottom:
                    "15px",
                }}
              >
                <input
                  placeholder={field
                    .replaceAll(
                      "_",
                      " "
                    )
                    .toUpperCase()}
                  value={
                    form[field]
                  }
                  onChange={(
                    e
                  ) =>
                    setForm({
                      ...form,
                      [field]:
                        e.target
                          .value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding:
                      "12px",
                    borderRadius:
                      "10px",
                    border:
                      "1px solid #475569",
                    background:
                      "#334155",
                    color:
                      "white",
                  }}
                />
              </div>
            )
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background:
                "#3b82f6",
              color: "white",
              fontWeight:
                "bold",
              cursor: "pointer",
            }}
          >
            Submit Case
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default CaseReport;