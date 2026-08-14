import {
  Menu,
  Search,
  ChevronDown,
  Bell,
  Settings,
  Mail,
  BookOpen,
  RotateCcw,
  CalendarDays,
} from "lucide-react";

import { useState } from "react";

interface LeaveRecallProps {
  setCurrentPage?: (page: string) => void;
}

interface LeaveApplication {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

const LeaveRecall = ({ setCurrentPage }: LeaveRecallProps) => {
  const [selectedApplication, setSelectedApplication] =
    useState<LeaveApplication | null>(null);

  const [showRecallModal, setShowRecallModal] = useState(false);

  const applications: LeaveApplication[] = [
    {
      name: "aebeb geecheu",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Casual",
      reason: "Personal",
    },
    {
      name: "aman bey",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Casual",
      reason: "Personal",
    },
    {
      name: "feven tesfaye",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Casual",
      reason: "Personal",
    },
    {
      name: "yanet tesfaye",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Casual",
      reason: "Personal",
    },
    {
      name: "beti wolloe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Casual",
      reason: "Personal",
    },
    {
      name: "dawit int",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Casual",
      reason: "Personal",
    },
    {
      name: "gelila oges",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Casual",
      reason: "Personal",
    },
  ];

  const openRecallModal = (application: LeaveApplication) => {
    setSelectedApplication(application);
    setShowRecallModal(true);
  };

  const closeRecallModal = () => {
    setShowRecallModal(false);
    setSelectedApplication(null);
  };

  const initiateRecall = () => {
    if (!selectedApplication) return;

    alert(`Leave recall initiated for ${selectedApplication.name}`);

    closeRecallModal();
  };

  return (
    <main className="main-content">
      {/* ================= TOP BAR ================= */}

      <div className="top-bar">
        <button className="hamburger">
          <Menu size={32} />
        </button>

        <div className="search-container">
          <div className="candidate-dropdown">
            <span>All Candidates</span>
            <ChevronDown size={13} />
          </div>

          <input type="text" placeholder="Search..." />

          <Search className="search-icon" size={22} />
        </div>

        <div className="top-icons">
          <div className="top-icon notification">
            <Bell size={18} />
            <span>13</span>
          </div>

          <div className="top-icon settings">
            <Settings size={19} />
          </div>

          <div className="top-icon mail">
            <Mail size={19} />
            <span>13</span>
          </div>
        </div>
      </div>

      {/* ================= PAGE TITLE ================= */}

      <div className="page-title">
        <BookOpen size={22} />
        <h2>Leave Management</h2>
      </div>

      {/* ================= ACTION BUTTONS ================= */}

      <div className="action-buttons">
        <button onClick={() => setCurrentPage?.("leave-settings")}>
          Leave Settings
        </button>

        <button className="active-action-button">Leave Recall</button>

        <button onClick={() => setCurrentPage?.("leave-history")}>
          Leave History
        </button>

        <button>Relief Officers</button>
      </div>

      {/* ================= ONGOING LEAVE APPLICATIONS ================= */}

      <section className="ongoing-leave-card">
        <h2>Ongoing Leave Applications</h2>

        <div className="recall-table">
          {/* TABLE HEADER */}

          <div className="recall-table-header">
            <span>Name(s)</span>
            <span>Duration(s)</span>
            <span>Start Date</span>
            <span>End Date</span>
            <span>Type</span>
            <span>Reason(s)</span>
            <span>Actions</span>
          </div>

          {/* TABLE ROWS */}

          {applications.map((application, index) => (
            <div
              className={`recall-table-row ${
                index % 2 === 1 ? "recall-blue-row" : ""
              }`}
              key={`${application.name}-${index}`}
            >
              <span>{application.name}</span>

              <span>{application.duration}</span>

              <span>{application.startDate}</span>

              <span>{application.endDate}</span>

              <span>{application.type}</span>

              <span>{application.reason}</span>

              <button
                className="recall-button"
                onClick={() => openRecallModal(application)}
              >
                Recall
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          RECALL MODAL
      ===================================================== */}

      {showRecallModal && selectedApplication && (
        <div className="recall-modal-overlay">
          <div className="recall-modal">
            {/* MODAL ICON */}

            <div className="recall-modal-icon">
              <RotateCcw size={30} />
            </div>

            {/* TITLE */}

            <h2>Leave Recall</h2>

            <p className="recall-modal-description">
              Fill in the required details to recall this employee
            </p>

            {/* EMPLOYEE NAME */}

            <div className="recall-form-group">
              <label>Employee Name</label>

              <input type="text" value={selectedApplication.name} readOnly />
            </div>

            {/* DEPARTMENT */}

            <div className="recall-form-group">
              <label>Department</label>

              <input type="text" value="Sales and Marketing" readOnly />
            </div>

            {/* START + END DATE */}

            <div className="recall-form-row">
              <div className="recall-form-group">
                <label>Start Date</label>

                <div className="recall-input-icon">
                  <input
                    type="text"
                    value={selectedApplication.startDate}
                    readOnly
                  />

                  <CalendarDays size={15} />
                </div>
              </div>

              <div className="recall-form-group">
                <label>End Date</label>

                <div className="recall-input-icon">
                  <input
                    type="text"
                    value={selectedApplication.endDate}
                    readOnly
                  />

                  <CalendarDays size={15} />
                </div>
              </div>
            </div>

            {/* DAYS REMAINING + RESUMPTION DATE */}

            <div className="recall-form-row">
              <div className="recall-form-group">
                <label>Days Remaining</label>

                <input type="number" value={3} readOnly />
              </div>

              <div className="recall-form-group">
                <label>New Resumption Date</label>

                <div className="recall-input-icon">
                  <input type="text" placeholder="Select date" />

                  <CalendarDays size={15} />
                </div>
              </div>
            </div>

            {/* RELIEF OFFICER */}

            <div className="recall-form-group">
              <label>Relief Officer(s)</label>

              <input type="text" value="HR bethel" readOnly />
            </div>

            {/* BUTTONS */}

            <div className="recall-modal-buttons">
              <button
                className="initiate-recall-button"
                onClick={initiateRecall}
              >
                Initiate Recall
              </button>

              <button
                className="cancel-recall-button"
                onClick={closeRecallModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default LeaveRecall;
