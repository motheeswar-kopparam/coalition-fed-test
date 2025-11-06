# Coalition FED Skills Test - Patient Diagnostic Dashboard

# --------------------------------------
# Overview
# --------------------------------------
# This is a single-page React application built from an Adobe XD template.
# It fetches patient diagnostic data from the Coalition Technologies Patient Data API.
# Only Jessica Taylor's data is displayed, including blood pressure charts, diagnostic history, and lab results.

# --------------------------------------
# Features
# --------------------------------------
# - Display patient information (profile, age, contact, insurance)
# - Blood pressure chart visualization with Chart.js
# - Diagnostic history and lab results
# - Search functionality for patient data
# - Fully responsive, matches Adobe XD design

# --------------------------------------
# Technologies Used
# --------------------------------------
# React
# Vite
# Chart.js & react-chartjs-2
# Axios / Fetch API
# Basic Auth

# --------------------------------------
# Installation
# --------------------------------------
# Clone the repository
git clone <your-repo-url>

# Navigate into the project
cd coalition-fed-test

# Install dependencies
npm install

# Run the development server
npm run dev

# Open the app in your browser
# URL: http://localhost:5173

# --------------------------------------
# API Integration
# --------------------------------------
# Endpoint: https://fedskillstest.coalitiontechnologies.workers.dev
# Authorization: Basic Auth
#   Username: coalition
#   Password: skills-test

# Example API call in JavaScript
# --------------------------------------
# const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
#   headers: {
#     'Authorization': `Basic ${btoa('coalition:skills-test')}`
#   }
# });
# const data = await response.json();
# const jessicaData = data.find(patient => patient.name === "Jessica Taylor");
# --------------------------------------

# --------------------------------------
# Project Structure
# --------------------------------------
# coalition-fed-test/
# ├─ public/
# │  └─ index.html
# ├─ src/
# │  ├─ components/
# │  │  ├─ PatientInfo.jsx
# │  │  ├─ BloodPressureChart.jsx
# │  │  ├─ LabResults.jsx
# │  │  └─ SearchBar.jsx
# │  ├─ App.jsx
# │  ├─ main.jsx
# │  └─ styles/
# │     └─ main.css
# ├─ package.json
# └─ README.md

# --------------------------------------
# Usage
# --------------------------------------
# 1. Start the app
npm run dev

# 2. Use the search bar to filter patient data (Jessica Taylor only)

# 3. View blood pressure chart and diagnostic history

# 4. Lab results update dynamically based on API response

# --------------------------------------
# Recommended Enhancements
# --------------------------------------
# - Additional charts for heart rate, respiratory rate, temperature
# - Fully responsive design for mobile and tablet
# - Dynamic filtering of diagnostic history

# --------------------------------------
# Suggested Application Names
# --------------------------------------
# DiagnoView
# MediTrack
# HealthScope
# PatientInsight
# VitalTrend
