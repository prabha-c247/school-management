import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//css
import "../assets/css/main.scss";
//auth
import Login from "../pages/authentication/login/Login";
import "../assets/css/main.scss";
//route
import {
  LOGIN,
  ANALYTICS,
  CREATE_PLANS,
  HISTORY,  
} from "../helper/PageRoute";
import AnalyticsFinance from "../pages/analytics-finance/AnalyticsFinance";
import CreatePlan from "../pages/plans/create-plans/CreatePlan";
import PlanHistory from "../pages/plans/plan-history/PlanHistory";

import { Container, Row, Col } from "react-bootstrap";

//sidebar
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  // const handleSearch = (query: string) => {
  //   // Implement your search logic here
  //   console.log(`Searching for: ${query}`);
  // };
  return (
    <BrowserRouter>
      <Container fluid className="main">
        <Row>
          <Col md={3} bg="light" className="d-none d-md-block">
            <Sidebar />
          </Col>
          <Col md={9} id="content" bg="dark">
            <Routes>
              <Route path={LOGIN} element={<Login />} />
              <Route path={ANALYTICS} element={<AnalyticsFinance />} />
              <Route path={CREATE_PLANS}>
                <Route index element={<CreatePlan />} />
                <Route path={HISTORY} element={<PlanHistory />} />
              </Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>   
  );
};

export default Home;
