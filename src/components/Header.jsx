import React from "react";

export default function Header() {
  return (
    <header className="top-header">
      <div className="nav-left">
        <nav className="nav">
          <a className="nav-item active">Overview</a>
          <a className="nav-item">Patients</a>
          <a className="nav-item">Schedule</a>
          <a className="nav-item">Message</a>
          <a className="nav-item">Transactions</a>
        </nav>
      </div>

      <div className="nav-right">
        <div className="doctor">
          <img src="https://i.pravatar.cc/40?img=12" alt="dr" />
          <div className="doctor-meta">
            <div className="doctor-name">Dr. Jose Simmons</div>
            <div className="doctor-role">General Practitioner</div>
          </div>
        </div>
      </div>
    </header>
  );
}
