import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  User,
} from "lucide-react";
import React from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import sidebarBg from "../assets/sidebar-bg.png";
import HomeLogo from "../assets/Home.png";
import whiteSpider from "../assets/whiteSpider.png";
import arcReact from "../assets/arcReact.png";
import capShield from "../assets/capShield.png";

const SidebarLink = ({ href, icon: Icon, label }) => {
  const pathname = useLocation();
  const isActive =
    pathname.pathname === href ||
    (pathname.pathname === "/" && href === "/dashboard");

  return (
    <Link to={href}>
      <div
        className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors text-white ${
          isActive ? "bg-blue-200 " : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span className="block font-medium text-white">{label}</span>
      </div>
    </Link>
  );
};

function Sidebar() {
  const sidebarClassNames = `fixed w-64 flex flex-col transition-all duration-300 overflow-hidden h-full shadow-md z-40`;
const {pathname} = useLocation()
  return (
    <>
    <div className="fixed w-64 flex flex-col transition-all duration-300 overflow-hidden h-full shadow-md z-40 font-Goldman" style={{backgroundImage: `url(${sidebarBg})`}}>
    <div className="bg-black bg-opacity-70 h-full w-full absolute z-20"></div>
      <div className="flex gap-3 justify-start items-center pt-8">
        <h1 className="font-extrabold text-2xl px-8 z-30">
          <img src={logo} alt="Logo" />
        </h1>
      </div>

      {/* Sidebar Links */}
      <div className="flex-grow mt-8 flex flex-col justify-start items-center gap-4">
        {/* <SidebarLink
          href="/team/spidey_squad"
          icon={Layout}
          label="Spiderman"
        />
        <SidebarLink href="/team/tony_techies" icon={Archive} label="IronMan" className="text-white" />
        <SidebarLink href="/team/cap_crusader" icon={Clipboard} label="Cap" />
        <SidebarLink
          href="/team/odinson_olympians"
          icon={User}
          label="Odinson"
        /> */}
        <NavLink to="/team/home" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF30] rounded-3xl text-xl w-4/5 p-3 z-30 drop-shadow-md h-16 pr-6">
          <img src={HomeLogo} alt="Home Logo" className="scale-[0.8]" />Home
        </NavLink>
        <NavLink to="/team/spidey_squad" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF30] rounded-3xl text-xl w-4/5 p-3 z-30 h-16 drop-shadow-md">
          <img src={whiteSpider} className="scale-[0.8]" alt="Home Logo"/>Spider-Man
        </NavLink>
        <NavLink to="/team/tony_techies" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF30] rounded-3xl text-xl w-4/5 p-3 z-30 h-16">
          <img src={arcReact} alt="Home Logo" /> Iron Man
        </NavLink>
        <NavLink to="/team/cap_crusader" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF30] rounded-3xl text-sm w-4/5 p-3 z-30 h-16">
          <img src={capShield} className="h-12 w-12" alt="Home Logo" /> Captain America
        </NavLink>
        <NavLink to="/team/odinson_olympians" className="text-white font-Goldman flex justify-between items-center bg-[#89E4FF30] rounded-3xl text-xl w-4/5 p-3 z-30 h-16">
          <img src={HomeLogo} alt="Home Logo" className="scale-[0.8]" />Home
        </NavLink>
      </div>

      {/* Footer */}
      <div className="mb-10">
        <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
      </div>
    </div>
    </>
  );
}

export default Sidebar;

// import React from "react";
// import {
//   Archive,
//   CircleDollarSign,
//   Clipboard,
//   Home,
//   Layout,
//   Plus,
//   Settings,
//   User,
// } from "lucide-react";
// import { useLocation, Link } from "react-router-dom";

// const SidebarLink = ({ href, icon: Icon, label, isCollapsed }) => {
//   const pathname = useLocation();

//   const isActive =
//     pathname === href || (pathname === "/" && href === "/dashboard");

//   return (
//     <Link to={href}>
//       <div
//         className={`cursor-pointer flex items-center
//           hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//             isActive ? "bg-blue-200 text-white" : ""
//           }
//         }`}
//       >
//         <Icon className="w-6 h-6 !text-gray-700" />

//         <span className={` font-medium text-gray-700`}>{label}</span>
//       </div>
//     </Link>
//   );
// };

// const Sidebar = () => {
//   const routes = [
//     {
//       icon: Home,
//       href: "/",
//       label: "Home",
//       pro: false,
//     },
//     {
//       icon: Plus,
//       href: "/companion/new",
//       label: "Create",
//       pro: true,
//     },
//     {
//       icon: Settings,
//       href: "/settings",
//       label: "Settings",
//       pro: false,
//     },
//   ];
//   const pathname = useLocation();
//   console.log(pathname);
//   const onNavigate = (url, pro) => {
//     // return router.push(url);
//   };
//   return (

//   );
// };

// export default Sidebar;

// import { setIsSidebarCollapsed } from "@/redux/slice";
// import {
//   Archive,
//   CircleDollarSign,
//   Clipboard,
//   Layout,
//   Menu,
//   User,
// } from "lucide-react";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, Link } from "react-router-dom";

// const SidebarLink = ({ href, icon: Icon, label, isCollapsed }) => {
//   const pathname = useLocation();
//   const isActive =
//     pathname === href || (pathname === "/" && href === "/dashboard");

//   return (
//     <Link to={href}>
//       <div
//         className={`cursor-pointer flex items-center ${
//           isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
//         }
//           hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//             isActive ? "bg-blue-200 text-white" : ""
//           }
//         }`}
//       >
//         <Icon className="w-6 h-6 !text-gray-700" />

//         <span
//           className={`${
//             isCollapsed ? "hidden" : "block"
//           } font-medium text-gray-700`}
//         >
//           {label}
//         </span>
//       </div>
//     </Link>
//   );
// };

// function Sidebar() {
//   const dispatch = useDispatch();
//   const isSidebarCollapsed = useSelector(
//     (state) => state.normal.isSidebarCollapsed
//   );
//   console.log(isSidebarCollapsed);
//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   const sidebarClassNames = `fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

//   return (
//     <div className={sidebarClassNames}>
//       <div
//         className={`flex gap-3 justify-between md:justify-normal items-center pt-8 `}
//       >

//         <h1
//           className={`${
//             isSidebarCollapsed ? "hidden" : "block"
//           } font-extrabold text-2xl`}
//         >
//           Hello
//         </h1>

//         <button
//           className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-4 h-4" />
//         </button>
//       </div>

//       {/* LINKS */}
// <div className="flex-grow mt-8">
//   <SidebarLink
//     href="/dashboard"
//     icon={Layout}
//     label="Dashboard"
//     isCollapsed={isSidebarCollapsed}
//   />
//   <SidebarLink
//     href="/inventory"
//     icon={Archive}
//     label="Inventory"
//     isCollapsed={isSidebarCollapsed}
//   />
//   <SidebarLink
//     href="/products"
//     icon={Clipboard}
//     label="Products"
//     isCollapsed={isSidebarCollapsed}
//   />
//   <SidebarLink
//     href="/users"
//     icon={User}
//     label="Users"
//     isCollapsed={isSidebarCollapsed}
//   />
//   <SidebarLink
//     href="/expenses"
//     icon={CircleDollarSign}
//     label="Expenses"
//     isCollapsed={isSidebarCollapsed}
//   />
// </div>

//       {/* FOOTER */}
//       <div className={` mb-10`}>
//         <p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
