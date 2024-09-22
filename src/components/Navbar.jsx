import React from "react";
import MobileSidebar from "./MobileSidebar";

function Navbar() {
  return (
    <div className="w-full h-full flex justify-between items-center py-2 px-4">
      <MobileSidebar />
    </div>
  );
}

export default Navbar;
