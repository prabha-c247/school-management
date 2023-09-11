import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//css
import "./Dashboard.scss";
//sidebar
import Sidebar from "../../components/sidebar/Sidebar";


const Dashboard = () => {
  // const handleSearch = (query: string) => {
  //   // Implement your search logic here
  //   console.log(`Searching for: ${query}`);
  // };
 
  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={3} bg="light">
          <Sidebar />
        </Col>
        <Col md={9} id="content" bg="dark">
         
          
          
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
