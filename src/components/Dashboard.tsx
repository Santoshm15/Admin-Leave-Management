import {
  Menu,
  Search,
  ChevronDown,
  Bell,
  Settings,
  Mail,
  BookOpen,
} from "lucide-react";

interface DashboardProps {
  setCurrentPage: (page: string) => void;
}

const Dashboard = ({ setCurrentPage }: DashboardProps) => {
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
        <button onClick={() => setCurrentPage("leave-settings")}>
          Leave Settings
        </button>

        <button onClick={() => setCurrentPage("leave-recall")}>
          Leave Recall
        </button>

        <button onClick={() => setCurrentPage("leave-history")}>
          Leave History
        </button>

        <button>Relief Officers</button>
      </div>

      {/* ================= HERO ================= */}

      <section className="hero-banner">
        {/* LEFT DECORATION */}

        <div className="hero-dotted-line hero-line-one"></div>

        <div className="hero-plane hero-plane-one">
          <span>➤</span>
        </div>

        {/* TEXT */}

        <div className="hero-content">
          <h1>
            <span className="hero-white">Manage ALL</span>{" "}
            <span className="hero-yellow">Leave Applications</span>
          </h1>

          <p>A relaxed employee is a performing employee.</p>
        </div>

        {/* RIGHT ILLUSTRATION */}

        <img
          src="/images/leave-hero-illustration.png"
          alt="Employee working"
          className="hero-illustration"
        />

        {/* BOTTOM DECORATION */}

        <div className="hero-dotted-line hero-line-two"></div>

        <div className="hero-plane hero-plane-two">
          <span>➤</span>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
