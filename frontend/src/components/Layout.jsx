import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        display: "flex",
flexDirection: "column",
justifyContent: "space-between",
        background: "#0f172a",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;