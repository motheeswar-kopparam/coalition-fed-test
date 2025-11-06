import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CenterColumn from "./components/CenterColumn";
import RightColumn from "./components/RightColumn";

/*
  API details:
  - Endpoint: https://fedskillstest.coalitiontechnologies.workers.dev
  - Basic Auth username: coalition
  - Basic Auth password: skills-test

  We encode credentials at runtime using btoa to avoid hard-coding an encrypted token.
*/

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const AUTH_USERNAME = "coalition";
const AUTH_PASSWORD = "skills-test";

export default function App() {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patients from API
  useEffect(() => {
    async function fetchPatients() {
      setLoading(true);
      setError(null);

      try {
        const token = btoa(`${AUTH_USERNAME}:${AUTH_PASSWORD}`);
        const res = await fetch(API_URL, {
          headers: {
            Authorization: `Basic ${token}`,
            Accept: "application/json",
          },
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();

        // Ensure we have an array
        const arr = Array.isArray(data) ? data : data.results || [];
        setPatients(arr);

        // Default active patient: Jessica Taylor if present, otherwise first
        const jessica = arr.find(
          (p) => p.name && p.name.toLowerCase() === "jessica taylor"
        );
        setActivePatient(jessica || arr[0] || null);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to fetch patients");
      } finally {
        setLoading(false);
      }
    }

    fetchPatients();
  }, []);

  // When a patient is clicked in the sidebar, update activePatient
  function handleSelectPatient(patient) {
    setActivePatient(patient);
    // Scroll to top of center column for better UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="app">
      <Sidebar
        patients={patients}
        activePatient={activePatient}
        onSelect={handleSelectPatient}
        loading={loading}
      />
      <div className="main-area">
        <Header />
        <div className="columns">
          <CenterColumn patient={activePatient} loading={loading} error={error} />
          <RightColumn patient={activePatient} />
        </div>
      </div>
    </div>
  );
}
