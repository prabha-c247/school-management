import React from "react";
import { Row, Col } from "react-bootstrap";
//DashboardCard
import AnalyticsFinanceCard from "../../components/common/card/AnalyticsFinanceCard";
import SearchBar from "../../components/common/serachbar/SearchBar";
import {
  TotalBalance,
  CourseTransitionHistory,
  OverallSelling,
  MostSellingPlan,
} from "../../components/dashboard-tables/Table";
import LineChart from "../../components/chart/LineChart";
import Filter from "../../components/common/filter/Filter";

const AnalyticsFinance = () => {
  return (
    <>
      <Row className="mb-3">
        <Col md={6}>
          {/* <DashboardCard heading= {"Total Income"} search={<SearchBar handleSearch={handleSearch}/>}/> */}
          <AnalyticsFinanceCard
            heading={"Total Income"}
            total={6327389463}
            content={<LineChart />}
            filter={<Filter />}
          />
        </Col>
        <Col md={6}>
          <AnalyticsFinanceCard
            heading={"Total Balance"}
            content={<TotalBalance />}
            total={6327389463}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <AnalyticsFinanceCard
            heading={"Course Transition History"}
            search={<SearchBar />}
            content={<CourseTransitionHistory />}
            filter={<Filter />}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={4}>
          <AnalyticsFinanceCard
            heading={"most selling plan"}
            content={<MostSellingPlan />}
          />
        </Col>
        <Col md={8}>
          <AnalyticsFinanceCard
            heading={"list of overall selling plan"}
            search={<SearchBar />}
            content={<OverallSelling />}
          />
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsFinance;
