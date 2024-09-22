import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div className="h-full">
      <div className="h-16 md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:flex w-64 flex-col relative inset-y-0">
        <Sidebar />
      </div>

      <main className="md:pl-64 h-full">{children}</main>
    </div>
  );
}

export default Layout;
