import { useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function Prediction() {

  const [form, setForm] = useState({
    patient_age: "",
    gender: "",
    drug: "",
    duration_days: "",
  });

  const [prediction, setPrediction] =
    useState("");
  const [confidence, setConfidence] =
    useState("");

  const handlePredict = async (e) => {

    e.preventDefault();

    try {

      const response =
        await api.post(
          "/prediction/predict",
          {
            patient_age:
              Number(
                form.patient_age
              ),

            gender:
              form.gender,

            drug:
              form.drug,

            duration_days:
              Number(
                form.duration_days
              ),
          }
        );

      setPrediction(
        response.data
          .predicted_severity
      );

      setConfidence(
        response.data
          .confidence
      );

    } catch (error) {

      console.log(error);

      alert(
        "Prediction Failed"
      );

    }
  };

  return (
    <Layout>

      <h1>
        AI Risk Prediction
      </h1>

      <form
        onSubmit={handlePredict}
      >

        <input
          placeholder="Age"
          onChange={(e) =>
            setForm({
              ...form,
              patient_age:
                e.target.value,
            })
          }
        />

        <br /><br />

        <input
          placeholder="Gender"
          onChange={(e) =>
            setForm({
              ...form,
              gender:
                e.target.value,
            })
          }
        />

        <br /><br />

        <input
          placeholder="Drug"
          onChange={(e) =>
            setForm({
              ...form,
              drug:
                e.target.value,
            })
          }
        />

        <br /><br />

        <input
          placeholder="Duration Days"
          onChange={(e) =>
            setForm({
              ...form,
              duration_days:
                e.target.value,
            })
          }
        />

        <br /><br />

        <button
          type="submit"
        >
          Predict Risk
        </button>

      </form>

      <br />

      {
        prediction && (
          <h2>
            Predicted Severity:
            {" "}
            {prediction}
          </h2>
        )
      }

      {
        confidence && (
          <h2>
            Confidence:
            {" "}
            {confidence}%
          </h2>
        )
      }

    </Layout>
  );
}

export default Prediction;