import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//sidebar
import Sidebar from "../../components/sidebar/Sidebar";
import AnalyticsFinance from "../analytics-finance/AnalyticsFinance";


const Dashboard = () => {
  // const handleSearch = (query: string) => {
  //   // Implement your search logic here
  //   console.log(`Searching for: ${query}`);
  // };
 
  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={3} bg="light" className="d-none d-md-block">
          <Sidebar />
        </Col>
        <Col md={9} id="content" bg="dark">
         
          <AnalyticsFinance/>
        
          
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
