import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import VisitTimeline from "./pages/VisitTimeline";
import Prediction from "./pages/Prediction";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CaseReport from "./pages/CaseReport";
import HealthPass from "./pages/HealthPass";
import PatientProfile from "./pages/PatientProfile";
import ResearchDashboard from "./pages/ResearchDashboard";
import AuthorityDashboard from "./pages/AuthorityDashboard";
import NationalAlerts from "./pages/NationalAlerts";
import ResearchFindings from "./pages/ResearchFindings";
import CommandCenter from "./pages/CommandCenter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route
          path="/"
          element={<Login />}
        />
        <Route
  path="/timeline"
  element={<VisitTimeline />}
/>

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
  path="/patient-profile"
  element={<PatientProfile />}
/>
<Route
  path="/national-alerts"
  element={<NationalAlerts />}
/>
<Route
  path="/research-dashboard"
  element={<ResearchDashboard />}
/>
        <Route
  path="/analytics"
  element={<Analytics />}
/>

<Route
  path="/prediction"
  element={<Prediction />}
/>
<Route
  path="/authority-dashboard"
  element={<AuthorityDashboard />}
/>
<Route
  path="/research-findings"
  element={<ResearchFindings />}
/>
<Route
  path="/command-center"
  element={<CommandCenter />}
/>

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Case Reporting */}
        <Route
          path="/case-report"
          element={<CaseReport />}
        />

        {/* Health Pass */}
        <Route
          path="/health-pass"
          element={<HealthPass />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;