import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/custom component/NavBar";

export default function Layout() {
  return (
    <div className="sm:container relative px-5" >
     <NavBar/>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
