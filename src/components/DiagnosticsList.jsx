import React from "react";

/*
  Simple diagnostic table that resembles the XD: Problem/Diagnosis | Description | Status
*/

export default function DiagnosticsList({ list = [], loading, error }) {
  return (
    <div className="card diagnostics-card">
      <div className="card-header">
        <h3>Diagnostic List</h3>
      </div>

      {loading && <div className="muted">Loading diagnostics...</div>}
      {error && <div className="muted error">{error}</div>}

      {!loading && !error && (
        <div className="diagnostics-table">
          <div className="table-row table-head">
            <div>Problem / Diagnosis</div>
            <div>Description</div>
            <div>Status</div>
          </div>

          {list.length === 0 && <div className="muted">No diagnostics listed.</div>}
          {list.map((d, i) => (
            <div className="table-row" key={i}>
              <div>{d.name}</div>
              <div className="muted small">{d.description}</div>
              <div>{d.status}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
