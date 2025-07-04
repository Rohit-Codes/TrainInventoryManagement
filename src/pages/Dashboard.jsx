import { Avatar, Button } from "@mantine/core";
import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTrain } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Rooms from "./Rooms";
import Inventory from "./Inventory";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DashBoardData from "./DashBoardData";
import { useAuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const dashboardMenuDiv = [
    {
      id: 1,
      title: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      id: 2,
      title: "Coaches",
      icon: <FaTrain />,
    },
    {
      id: 3,
      title: "Maintenance",
      icon: <GrVmMaintenance />,
    },
  ];

  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const { logout } = useAuthContext();

  const handleActiveClass = (id) => {
    setActive(id);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dashBoardMainDiv" style={{ position: "relative" }}>
      <div className="mobileMenuDiv">
        <div className="topLeftDiv">
          <Avatar src="avatar.png" alt="it's me" />
          <span>Hi, Rohit</span>
        </div>
        <div className="hamBurgerMenuDiv" onClick={handleOpen}>
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
      <div className={`leftMenuDiv ${open ? "openClass" : " "}`}>
        <div className="topLeftDiv">
          <Avatar src="avatar.png" alt="it's me" />
          <span>Hi, Rohit</span>
        </div>

        <div className="leftMainMenuDiv">
          <ul>
            {dashboardMenuDiv &&
              dashboardMenuDiv?.map((data) => {
                return (
                  <li key={data?.id}>
                    <div
                      className={`menuItemDiv ${
                        active == data.id ? "active" : " "
                      }`}
                      onClick={() => {
                        handleActiveClass(data?.id);
                      }}
                    >
                      <div className="menuItemIconDiv">{data?.icon}</div>
                      <span>{data?.title}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="logoutBtnDiv">
          <Button variant="filled" color="red" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
      <div className={`rightDiv ${open ? "openClass" : " "}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
