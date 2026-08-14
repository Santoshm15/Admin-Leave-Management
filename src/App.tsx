import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LeaveSettings from "./components/LeaveSettings";
import LeaveRecall from "./components/LeaveRecall";
import LeaveHistory from "./components/LeaveHistory";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar setCurrentPage={setCurrentPage} />

      {currentPage === "dashboard" && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "leave-settings" && (
        <LeaveSettings setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "leave-recall" && (
        <LeaveRecall setCurrentPage={setCurrentPage} />
      )}

      {currentPage === "leave-history" && (
        <LeaveHistory setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
