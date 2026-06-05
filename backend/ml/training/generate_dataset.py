import pandas as pd
import random

rows = []

drugs = [
    "Amoxicillin",
    "Ibuprofen",
    "Paracetamol",
    "Cetirizine"
]

for _ in range(1000):

    age = random.randint(18, 85)

    gender = random.choice(
        ["Male", "Female"]
    )

    drug = random.choice(drugs)

    duration = random.randint(1, 14)

    if age > 65 and duration > 10:
        severity = "Severe"

    elif age > 40:
        severity = "Moderate"

    else:
        severity = "Mild"

    rows.append([
        age,
        gender,
        drug,
        duration,
        severity
    ])

df = pd.DataFrame(
    rows,
    columns=[
        "patient_age",
        "gender",
        "drug",
        "duration_days",
        "severity"
    ]
)

df.to_csv(
    "../data/drug_safety_dataset.csv",
    index=False
)

print(df.shape)
print("Dataset Generated Successfully")