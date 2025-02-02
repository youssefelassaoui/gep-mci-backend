import React from "react";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

export default function Layout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar routes={routes} />
      {/* Other content */}
    </div>
  );
}
