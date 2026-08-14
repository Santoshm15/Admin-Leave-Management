import {
  Menu,
  Search,
  ChevronDown,
  Bell,
  Settings,
  Mail,
  BookOpen,
  Filter,
  Download,
} from "lucide-react";

interface LeaveHistoryProps {
  setCurrentPage?: (page: string) => void;
}

interface HistoryItem {
  name: string;
  duration: number;
  startDate: string;
  endDate: string;
  type: string;
  reason: string;
}

const LeaveHistory = ({ setCurrentPage }: LeaveHistoryProps) => {
  const historyData: HistoryItem[] = [
    {
      name: "abebe gemechu",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "aman bey",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Exam",
      reason: "Examination",
    },
    {
      name: "feven Tesfaye",
      duration: 120,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Maternity",
      reason: "Child Care",
    },
    {
      name: "gelila moges",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "yanet tesfaye",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "beti woloe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "dawit int",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
  ];

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

        <button onClick={() => setCurrentPage?.("leave-recall")}>
          Leave Recall
        </button>

        <button className="active-action-button">Leave History</button>

        <button>Relief Officers</button>
      </div>

      {/* ================= LEAVE HISTORY CARD ================= */}

      <section className="leave-history-card">
        <div className="leave-history-heading">
          <h2>Leave History</h2>

          <div className="history-tools">
            <Filter size={19} className="filter-icon" />

            <button className="export-button">
              <span>Export</span>

              <Download size={14} />
            </button>
          </div>
        </div>

        {/* ================= TABLE ================= */}

        <div className="history-table">
          {/* HEADER */}

          <div className="history-table-header">
            <span>Name(s)</span>

            <span>Duration(s)</span>

            <span>Start Date</span>

            <span>End Date</span>

            <span>Type</span>

            <span>Reason(s)</span>

            <span>Actions</span>
          </div>

          {/* DATA */}

          {historyData.map((item, index) => (
            <div
              className={`history-table-row ${
                index % 2 === 1 ? "history-blue-row" : ""
              }`}
              key={`${item.name}-${index}`}
            >
              <span>{item.name}</span>

              <span>{item.duration}</span>

              <span>{item.startDate}</span>

              <span>{item.endDate}</span>

              <span>{item.type}</span>

              <span>{item.reason}</span>

              <button className="history-action-button">
                Actions
                <ChevronDown size={11} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LeaveHistory;
