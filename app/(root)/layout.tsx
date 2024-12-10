import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
