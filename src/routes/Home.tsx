import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//css
import "../assets/css/main.scss";
//auth
import Login from "../pages/authentication/login/Login";
//route
import { LOGIN, ANALYTICS, CREATE_PLANS, HISTORY,VIEW_PLAN } from "../helper/PageRoute";
import AnalyticsFinance from "../pages/analytics-finance/AnalyticsFinance";
import CreatePlan from "../pages/plans/create-plans/CreatePlan";
import PlanHistory from "../pages/plans/plan-history/PlanHistory";
//sidebar
import Sidebar from "../components/sidebar/Sidebar";
import SinglePlanView from "../pages/plans/view-plan/SinglePlanView";

const Home = () => {
  return (
    <BrowserRouter>
      <Container fluid className="main position-relative">
        <Row>
          {/* <Col md={3} className="col-auto col-md-4 col-lg-3 min-vh-100"> */}
          <Col md={3} bg="light" className="d-none d-md-block col-auto">
            <Sidebar />
          </Col>
          <Col md={9} id="content" bg="dark">
            <div style={{ width: "100%", margin: "auto", paddingTop: "1%" }}>
              <Routes>
                <Route path={LOGIN} element={<Login />} />
                <Route path={ANALYTICS} element={<AnalyticsFinance />} />
                <Route path={HISTORY}>
                  <Route index element={<PlanHistory />} />
                  <Route path={CREATE_PLANS} element={<CreatePlan />} />
                  <Route path={VIEW_PLAN} element={<SinglePlanView />} />
                </Route>
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default Home;
