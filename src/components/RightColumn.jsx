import React from "react";

/*
  Right column shows patient profile, contact details and lab results
*/
export default function RightColumn({ patient }) {
  if (!patient) {
    return (
      <aside className="right-column">
        <div className="card muted">Select a patient to view details</div>
      </aside>
    );
  }

  return (
    <aside className="right-column">
      <div className="card profile-card">
        <img className="profile-photo" src={patient.profile_picture} alt={patient.name} />
        <h3>{patient.name}</h3>
        <div className="muted small">Date Of Birth</div>
        <div>{patient.date_of_birth}</div>
        <div className="muted small">Gender</div>
        <div>{patient.gender}</div>

        <div className="contact">
          <div className="muted small">Contact info</div>
          <div>{patient.phone_number}</div>
        </div>

        <div className="contact">
          <div className="muted small">Emergency Contacts</div>
          <div>{patient.emergency_contact}</div>
        </div>

        <div className="contact">
          <div className="muted small">Insurance Provider</div>
          <div>{patient.insurance_type}</div>
        </div>

        <button className="btn primary">Show All Information</button>
      </div>

      <div className="card labs-card">
        <h4>Lab Results</h4>
        <ul>
          {patient.lab_results?.map((lab, i) => (
            <li key={i} className="lab-item">
              <span>{lab}</span>
              <button className="icon">⬇</button>
            </li>
          )) || <div className="muted">No lab results</div>}
        </ul>
      </div>
    </aside>
  );
}
