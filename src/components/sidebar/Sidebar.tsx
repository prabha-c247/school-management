import React from "react";
import {Link,useLocation} from "react-router-dom";
import {Nav, Image } from "react-bootstrap";

//icons
import { AiFillSetting,AiOutlineLogout,AiFillMail,AiOutlineLineChart } from "react-icons/ai";
import {BiSolidSchool} from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
//css
import "./Sidebar.scss";
import { ANALYTICS, CREATE_PLANS, All_SCHOOL } from "../../helper/PageRoute";
// image
import userIcon from "../../assets/images/usericon.png";

const Sidebar = () => {
  // Sample user data (replace with actual user data)
  //   const user = {
  //     name: "John Doe",
  //     imageUrl: "path_to_user_image.jpg",
  //   };
  const location = useLocation();
  return (       
        <div  id="sidebar">
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
              <div className="d-flex ">
              <AiOutlineLineChart size={30}/>
                <Nav.Link as={Link} to={ANALYTICS} className={location.pathname === ANALYTICS ? "active" : ""}>Analytics and Finance</Nav.Link>
                
              </div>
              <div className="line" />
              <div className="d-flex ">
                <IoIosCreate size={30}/>
                <Nav.Link as={Link} to={CREATE_PLANS} className={location.pathname === ANALYTICS ? "active" : ""}>Plans</Nav.Link>
              </div>
              <div className="line" />
              <div className="d-flex ">
                <BiSolidSchool size={30}/>
                <Nav.Link as={Link} to={All_SCHOOL} className={location.pathname === ANALYTICS ? "active" : ""}>School</Nav.Link>
              </div>
              <div className="line" />
              <div className="d-flex ">
                <AiFillMail size={30}/>
                <Nav.Link href="#">Mail and Messages</Nav.Link>
              </div>
            </Nav>
          </div>

          {/* Section 3: Logout and Settings */}
          <div className="section">
            <h5>Settings</h5>
            <Nav className="flex-column">
            <div className="d-flex">
                <AiOutlineLogout size={30}/>
                <Nav.Link href="#">Logout</Nav.Link>
              </div>
              <div className="d-flex ">               
                <AiFillSetting size={30}/>
                <Nav.Link href="#">Settings</Nav.Link>
              </div>
              
            </Nav>
          </div>
        </div>   
  );
};

export default Sidebar;
