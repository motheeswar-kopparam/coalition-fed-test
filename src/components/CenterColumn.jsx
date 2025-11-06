import React from "react";
import BPChart from "./BPChart";
import DiagnosticsList from "./DiagnosticsList";

/*
  CenterColumn composes the chart and vitals cards and diagnostic list.
  It uses simple helper functions for transforming data.
*/

function VitalsCards({ latest }) {
  if (!latest) return <div className="muted">No vitals available</div>;

  const bp = latest.blood_pressure || {};
  return (
    <div className="vitals-row">
      <div className="card small">
        <div className="card-title">Respiratory Rate</div>
        <div className="card-value">{latest.respiratory_rate?.value ?? "—"} bpm</div>
        <div className="card-note">{latest.respiratory_rate?.levels ?? ""}</div>
      </div>

      <div className="card small">
        <div className="card-title">Temperature</div>
        <div className="card-value">{latest.temperature?.value ?? "—"} °F</div>
        <div className="card-note">{latest.temperature?.levels ?? ""}</div>
      </div>

      <div className="card small">
        <div className="card-title">Heart Rate</div>
        <div className="card-value">{latest.heart_rate?.value ?? "—"} bpm</div>
        <div className="card-note">{latest.heart_rate?.levels ?? ""}</div>
      </div>
    </div>
  );
}

export default function CenterColumn({ patient, loading, error }) {
  const history = patient?.diagnosis_history || [];
  const latest = history[0] || null;

  return (
    <main className="center-column">
      <div className="card">
        <div className="card-header">
          <h3>Diagnosis History</h3>
          <div className="card-controls">Last 6 months ▾</div>
        </div>

        <div className="chart-area">
          <BPChart history={history} />
          <div className="chart-legend">
            <div><span className="legend-dot red"></span> Systolic: {latest?.blood_pressure?.systolic?.value ?? "—"}</div>
            <div><span className="legend-dot blue"></span> Diastolic: {latest?.blood_pressure?.diastolic?.value ?? "—"}</div>
          </div>
        </div>
      </div>

      <VitalsCards latest={latest} />

      <DiagnosticsList list={patient?.diagnostic_list || []} loading={loading} error={error} />
    </main>
  );
}
