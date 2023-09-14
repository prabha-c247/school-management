import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
//css
import styles from "./PlanHistory.module.scss";
//route
import { CREATE_PLANS,VIEW_PLAN } from "../../../helper/PageRoute";
//component
import Filter from "../../../components/common/filter/Filter";
import SearchBar from "../../../components/common/serachbar/SearchBar";

const PlanHistory = () => {
  const navigate = useNavigate();

  const tableData=[
    {
      planNo: 1,
      planName: "Gold Plan",
      planDate: "14-09-2023 04:09 PM",
      planMode: "Active",
    },
    {
      planNo: 2,
      planName: "Silver Plan",
      planDate: "15-09-2023 06:09 PM",
      planMode: "Deactive",
    },
     {
      planNo: 3,
      planName: "Platinum Plan",
      planDate: "23-09-2023 06:09 PM",
      planMode: "Active",
    },
    {
      planNo: 4,
      planName: "Silver Plan",
      planDate: "15-09-2023 06:09 PM",
      planMode: "Deactive",
    },
    {
      planNo: 5,
      planName: "Silver Plan",
      planDate: "15-09-2023 06:09 PM",
      planMode: "Deactive",
    },
    {
      planNo: 6,
      planName: "Platinum Plan",
      planDate: "23-09-2023 06:09 PM",
      planMode: "Active",
    },
    {
      planNo: 7,
      planName: "Platinum Plan",
      planDate: "23-09-2023 06:09 PM",
      planMode: "Active",
    },
    {
      planNo: 8,
      planName: "Platinum Plan",
      planDate: "23-09-2023 06:09 PM",
      planMode: "Active",
    },
    {
      planNo: 9,
      planName: "Platinum Plan",
      planDate: "23-09-2023 06:09 PM",
      planMode: "Active",
    },

  ]
  return (
    <Container>
      <Row className="mb-3">
        <nav
          className={`${styles.nav} d-flex align-items-center justify-content-between mx-auto`}
        >
          <h5>Plan History</h5>
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
                onClick={() => navigate(CREATE_PLANS)}
              >
                Create Plan <AiOutlinePlusCircle />
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
                <th>P.No.</th>
                <th>Plan Name/Title</th>
                <th>Plan Creation Date & Time</th>
                <th>Current Mode</th>
                <th>View Plan</th>
              </tr>
            </thead>
            <tbody>
             {
              tableData.map((data,index)=>{
                return(
                  <tr key={index}>
                  <td>{data.planNo}</td>
                  <td>{data.planName}</td>
                  <td>{data.planDate}</td>
                  <td><Button  className="rounded-pill" variant="primary">{data.planMode}</Button></td>
                  <td><Button className="rounded-pill" variant="secondary" onClick={()=>{navigate(VIEW_PLAN)}}>View</Button></td>
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

export default PlanHistory;
