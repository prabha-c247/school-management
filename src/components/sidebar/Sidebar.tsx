import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Nav, Image } from "react-bootstrap";

//icons
import {
  AiFillSetting,
  AiOutlineLogout,
  AiFillMail,
  AiOutlineLineChart,
} from "react-icons/ai";
import { BiSolidSchool } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
//css
import "./Sidebar.scss";
import { ANALYTICS, CREATE_PLANS, All_SCHOOL } from "../../helper/PageRoute";
// image
import userIcon from "../../assets/images/usericon.png";

const Sidebar = () => {
  // const location = useLocation();
  //  const isActiveLink = (path:string) => {
  //   return location.pathname === path ? "active" : "";
  // };

  // Sample user data (replace with actual user data)
  //   const user = {
  //     name: "John Doe",
  //     imageUrl: "path_to_user_image.jpg",
  //   };

  return (
    <div id="sidebar">
      {/* Section 1: User Info */}
      <div className="d-flex section user-info mt-3">
        <Image
          src={userIcon}
          //   src={user.imageUrl}
          //   alt={user.name}
          roundedCircle
          className="user-image"
          width={50}
        />
        {/* <h5>{user.name}</h5> */}
        <h5>prabha raikwar</h5>
      </div>

      {/* Section 2: Routes */}
      <div className="section mt-5">
        <h5>Routes</h5>
        <Nav className="flex-column">
          <div className="d-flex align-items-center mr-auto">
            <AiOutlineLineChart size={30} />
            <Nav.Link as={Link} to={ANALYTICS} className="text-white nav-link">
              Analytics and Finance
            </Nav.Link>
          </div>
          <div className="line" />
          <div className="d-flex nav-item">
            <IoIosCreate size={30} />
            <Nav.Link as={Link} to={CREATE_PLANS} className=" text-light">
              Plans
            </Nav.Link>
          </div>
          <div className="line" />
          <div className="d-flex ">
            <BiSolidSchool size={30} />
            <Nav.Link as={Link} to={All_SCHOOL} className="text-light">
              School
            </Nav.Link>
          </div>
          <div className="line" />
          <div className="d-flex ">
            <AiFillMail size={30} />
            <Nav.Link href="#" className="text-light">
              Mail and Messages
            </Nav.Link>
          </div>
        </Nav>
      </div>

      {/* Section 3: Logout and Settings */}
      <div className="section">
        <h5>Settings</h5>
        <Nav className="flex-column">
          <div className="d-flex">
            <AiOutlineLogout size={30} />
            <Nav.Link href="#" className="nav_link">
              Logout
            </Nav.Link>
          </div>
          <div className="d-flex ">
            <AiFillSetting size={30} />
            <Nav.Link href="#" className="nav_link">
              Settings
            </Nav.Link>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
