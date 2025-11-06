import React, { useState, useMemo } from "react";

/*
  Sidebar shows list of patients with a search bar.
  The search filters patients by name (case-insensitive).
*/

function PatientItem({ p, active, onClick }) {
  return (
    <div
      className={`patient-item ${active ? "active" : ""}`}
      onClick={() => onClick(p)}
      role="button"
    >
      <img className="patient-thumb" src={p.profile_picture} alt={p.name} />
      <div className="patient-meta">
        <div className="patient-name">{p.name}</div>
        <div className="patient-sub">
          {p.gender}, {p.age}
        </div>
      </div>
      <div className="patient-actions">⋯</div>
    </div>
  );
}

export default function Sidebar({ patients, activePatient, onSelect, loading }) {
  const [query, setQuery] = useState("");

  // Filter patients based on search query
  const filteredPatients = useMemo(() => {
    if (!query.trim()) return patients;
    const q = query.toLowerCase();
    return patients.filter((p) => p.name.toLowerCase().includes(q));
  }, [query, patients]);

  return (
    <aside className="sidebar-left">
      <div className="brand">
        <div className="logo">MedAlytic</div>
      </div>

      {/* Search bar */}
      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Search patients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search patients"
        />
      </div>

      <div className="patients-list">
        {loading && <div className="muted">Loading patients...</div>}
        {!loading && filteredPatients.length === 0 && (
          <div className="muted">No patients found</div>
        )}
        {!loading &&
          filteredPatients.map((p) => (
            <PatientItem
              key={p.name + (p.phone_number || "")}
              p={p}
              active={activePatient && activePatient.name === p.name}
              onClick={onSelect}
            />
          ))}
      </div>
    </aside>
  );
}
