import {
  Menu,
  Search,
  ChevronDown,
  Bell,
  Settings,
  Mail,
  BookOpen,
  MoreVertical,
  Check,
} from "lucide-react";

interface LeaveSettingsProps {
  setCurrentPage?: (page: string) => void;
}

const LeaveSettings = ({ setCurrentPage }: LeaveSettingsProps) => {
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
        <button className="active-action-button">Leave Settings</button>

        <button onClick={() => setCurrentPage?.("leave-recall")}>
          Leave Recall
        </button>

        <button onClick={() => setCurrentPage?.("leave-history")}>
          Leave History
        </button>

        <button>Relief Officers</button>
      </div>

      {/* ================= LEAVE SETTINGS ================= */}

      <div className="leave-settings-layout">
        {/* ================= CREATE LEAVE SETTINGS ================= */}

        <section className="create-leave-card">
          <h2>Create Leave Settings</h2>

          <div className="leave-form-grid">
            {/* Leave Plan Name */}

            <div className="leave-field">
              <label>Leave Plan Name</label>

              <input type="text" value="Maternity" readOnly />
            </div>

            {/* Duration */}

            <div className="leave-field">
              <label>Duration (days)</label>

              <div className="number-input">
                <input type="number" value="60" readOnly />

                <div className="number-arrows">
                  <span>▲</span>
                  <span>▼</span>
                </div>
              </div>
            </div>

            {/* Recall */}

            <div className="leave-field leave-field-full">
              <label>
                Do you want to activate Leave Recall for this plan ?
              </label>

              <div className="select-field">
                <span>Select option from dropdown</span>

                <ChevronDown size={16} />
              </div>
            </div>

            {/* Leave Bonus */}

            <div className="leave-field">
              <label>Would you like to activate leave bonus</label>

              <div className="select-field">
                <span>Select option from dropdown</span>

                <ChevronDown size={16} />
              </div>
            </div>

            {/* Bonus Percentage */}

            <div className="leave-field">
              <label>How much percentage of leave bonus?</label>

              <input type="text" placeholder="Percentage (%)" />
            </div>

            {/* Leave Allocation */}

            <div className="leave-field leave-field-full">
              <label>Select Leave Allocation</label>

              <div className="select-field">
                <span>Senior Level</span>

                <ChevronDown size={16} />
              </div>
            </div>

            {/* Reason */}

            <div className="leave-field leave-field-full">
              <label>Reason for Recall</label>

              <textarea />
            </div>
          </div>

          {/* CREATE BUTTON */}

          <button className="create-button">Create</button>
        </section>

        {/* ================= MANAGE LEAVE SETTINGS ================= */}

        <section className="manage-leave-card">
          <div className="manage-card-header">
            <h2>Manage Leave Settings</h2>

            <MoreVertical size={20} />
          </div>

          {/* TABLE HEADER */}

          <div className="leave-table">
            <div className="leave-table-header">
              <span>Leave Plan</span>

              <span>Duration(s)</span>

              <span>Recall / Autorenew</span>

              <span>Actions</span>
            </div>

            {/* MATERNITY */}

            <div className="leave-table-row">
              <span>Maternity</span>

              <span>60</span>

              <span>No / No</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>

            {/* SICK */}

            <div className="leave-table-row blue-row">
              <span>Sick</span>

              <span>14</span>

              <span>No / Yes</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>

            {/* COMPASSIONATE */}

            <div className="leave-table-row">
              <span>Compassionate</span>

              <span>30</span>

              <span>No / No</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>

            {/* EXAM */}

            <div className="leave-table-row blue-row">
              <span>Exam</span>

              <span>20</span>

              <span>No / No</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>

            {/* PATERNITY */}

            <div className="leave-table-row">
              <span>Paternity</span>

              <span>60</span>

              <span>No / No</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>

            {/* CASUAL */}

            <div className="leave-table-row blue-row">
              <span>Casual</span>

              <span>10</span>

              <span>Yes / No</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>

            {/* EXAM */}

            <div className="leave-table-row">
              <span>Exam</span>

              <span>20</span>

              <span>No / No</span>

              <button className="actions-button">
                Actions
                <Check size={13} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LeaveSettings;
