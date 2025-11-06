import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

/*
  BPChart:
  - Accepts `history` = patient.diagnosis_history (array)
  - Each entry expected to have month, year, and blood_pressure.{systolic.value, diastolic.value}
  - Uses useMemo to avoid unnecessary re-renders
*/

export default function BPChart({ history = [] }) {
  const months = history.map(h => `${h.month} ${h.year}`);
  const systolic = history.map(h => h.blood_pressure?.systolic?.value ?? null);
  const diastolic = history.map(h => h.blood_pressure?.diastolic?.value ?? null);

  const data = useMemo(() => ({
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        tension: 0.4,
        borderColor: "#F472B6", // pink
        pointRadius: 4,
        yAxisID: "y",
      },
      {
        label: "Diastolic",
        data: diastolic,
        tension: 0.4,
        borderColor: "#60A5FA", // blue
        pointRadius: 4,
        yAxisID: "y",
      }
    ]
  }), [months.join("|"), systolic.join("|"), diastolic.join("|")]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: false, suggestedMin: 50, suggestedMax: 180 }
    }
  };

  return (
    <div className="bp-chart">
      {history.length === 0 ? (
        <div className="muted">No chart data</div>
      ) : (
        <div style={{ height: 250 }}>
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
}
