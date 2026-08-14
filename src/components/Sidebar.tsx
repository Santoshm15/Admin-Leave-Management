import {
  LayoutDashboard,
  MessageSquare,
  BriefcaseBusiness,
  Users,
  FileText,
  UserRound,
  BookOpen,
  Scale,
  Banknote,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  setCurrentPage: (page: string) => void;
}

const Sidebar = ({ setCurrentPage }: SidebarProps) => {
  return (
    <aside className="sidebar">
      {/* ================= LOGO ================= */}

      <div className="logo">
        <div className="logo-icon">
          <div className="logo-network">✦</div>
        </div>

        <div className="logo-text">
          XCEL<span>TECH</span>
        </div>
      </div>

      {/* ================= ADMIN PROFILE ================= */}

      <div className="profile">
        <div className="profile-image">👨🏽‍💼</div>

        <div className="profile-info">
          <h3>Aman Admin</h3>
          <p>Admin</p>
        </div>
      </div>

      {/* ================= FEATURES ================= */}

      <div className="menu-section">
        <p className="section-title">Features</p>

        {/* Dashboard */}

        <div
          className="menu-item active"
          onClick={() => setCurrentPage("dashboard")}
        >
          <LayoutDashboard size={19} />

          <span>Dashboard</span>
        </div>

        {/* Messages */}

        <div className="menu-item">
          <MessageSquare size={19} />

          <span>Messages</span>

          <span className="notification-count">13</span>
        </div>
      </div>

      {/* ================= RECRUITMENT ================= */}

      <div className="menu-section">
        <p className="section-title">Recruitment</p>

        <div className="menu-item">
          <BriefcaseBusiness size={19} />
          <span>Jobs</span>
        </div>

        <div className="menu-item">
          <Users size={19} />
          <span>Candidates</span>
        </div>

        <div className="menu-item">
          <FileText size={19} />
          <span>Resumes</span>
        </div>
      </div>

      {/* ================= ORGANIZATION ================= */}

      <div className="menu-section">
        <p className="section-title">Organization</p>

        <div className="menu-item">
          <UserRound size={19} />
          <span>Employee Management</span>
        </div>

        <div className="menu-item">
          <BookOpen size={19} />
          <span>Leave Management</span>
        </div>

        <div className="menu-item">
          <Scale size={19} />
          <span>Performance Management</span>
        </div>

        <div className="menu-item">
          <Banknote size={19} />
          <span>Payroll Management</span>
        </div>
      </div>

      {/* ================= LOGOUT ================= */}

      <button className="logout-button">
        <LogOut size={16} />
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
