import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
//css
// import styles from "./PlanHistory.module.scss";
//route
import { ADD_SCHOOL, VIEW_SCHOOL } from "../../../helper/PageRoute";
//component
import Filter from "../../../components/common/filter/Filter";
import SearchBar from "../../../components/common/serachbar/SearchBar";

const AllSchools = () => {
  const navigate = useNavigate();

  const allSchool=[
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
     {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school", 
    },
    {
      schoolImg: "../../../assets/images/usericon.png",
      schoolName: "Govt school",      
    },

  ]
  return (
    <Container>
      <Row className="mb-3">
        <nav
          className="d-flex align-items-center justify-content-between mx-auto" 
        >
          <h5>All School List</h5>
          <div className="d-flex align-items-center justify-content-evenly">
            <div className="mr-3">
              <SearchBar />
            </div>
            <div className="mr-3">
              <Filter />
            </div>
            <div>
              <Button
                className="rounded-pill"
                variant="secondary"
                onClick={() => navigate(ADD_SCHOOL)}
              >
                Add School <AiOutlinePlusCircle />
              </Button>
            </div>
          </div>
        </nav>
      </Row>
      <Row>
        <Col>
          <Table className="mt-2">
            <thead>
              <tr>
                <th>School logo</th>
                <th>School Name</th>
                <th>Edit School</th>
                <th>View School</th>                
              </tr>
            </thead>
            <tbody>
             {
              allSchool.map((data,index)=>{
                return(
                  <tr key={index}>
                  <td>{data.schoolImg}</td>                
                  <td>{data.schoolName}</td>
                  <td><Button  className="rounded-pill" variant="primary">edit</Button></td>
                  <td><Button className="rounded-pill" variant="secondary" onClick={()=>{navigate(VIEW_SCHOOL)}}>View</Button></td>
                </tr>
                )
              })
             }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AllSchools;
