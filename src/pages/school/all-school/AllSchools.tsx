import React, { useState } from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
//css
// import styles from "./PlanHistory.module.scss";
//route
import { ADD_SCHOOL, EDIT_SCHOOL } from "../../../helper/PageRoute";
//component
import Filter from "../../../components/common/filter/Filter";
import SearchBar from "../../../components/common/serachbar/SearchBar";
import ViewSchoolModal from "../../../components/common/modal/ViewSchoolModal";
//types
import { School } from "../../../helper/Types";

const AllSchools = () => {
  const navigate = useNavigate();
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  // ModalOpen
  const OpenModal = (school: School | null = null) => {
    setSelectedSchool((prevState) => (school === null ? null : school));
    setModalOpen(true);
  };
  const HideModal = () => setModalOpen(false);

  const goToEdit = (data: School) => {
    navigate(EDIT_SCHOOL, { state: { schoolData: data } });
  };

  const allSchool = [
    {
      id: 1,
      schoolLogo: require("../../../assets/images/login.png"),
      schoolName: "Govt school",
    },
    {
      id: 2,
      schoolLogo: require("../../../assets/images/usericon.png"),
      schoolName: "Private school",
    },
    {
      id: 3,
      schoolLogo: require("../../../assets/images/usericon.png"),
      schoolName: "Local school",
    },
    {
      id: 4,
      schoolLogo: require("../../../assets/images/usericon.png"),
      schoolName: "CBSE school",
    },
    {
      id: 5,
      schoolLogo: require("../../../assets/images/login.png"),
      schoolName: "Local school",
    },
    {
      id: 6,
      schoolLogo: require("../../../assets/images/usericon.png"),
      schoolName: "Govt school",
    },
    {
      id: 7,
      schoolLogo: require("../../../assets/images/login.png"),
      schoolName: "Govt school",
    },
    {
      id: 8,
      schoolLogo: require("../../../assets/images/login.png"),
      schoolName: "Govt school",
    },
  ];
  return (
    <Container>
      <Row className="mb-3">
        <nav className="d-flex align-items-center justify-content-between mx-auto">
          <h5>All School List</h5>
          <div className="d-flex align-items-center justify-content-evenly">
            <div className="me-3">
              <SearchBar />
            </div>
            <div className="me-3">
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
              {allSchool.map((data) => {
                const schoolData = data as School;
                return (
                  <tr key={data.id} className="align-items-center">
                    <td>
                      <img
                        src={data.schoolLogo}
                        alt="school logo"
                        className="img-fluid school-logo"
                      />
                    </td>
                    <td>{data.schoolName}</td>
                    <td>
                      <Button
                        className="rounded-pill view_btn"
                        variant="primary"
                        onClick={() => {
                          goToEdit(schoolData);
                        }}
                      >
                        edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="rounded-pill view_btn"
                        variant="secondary"
                        onClick={() => {
                          OpenModal(schoolData);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                );
              })}
              <ViewSchoolModal
                modalOpen={modalOpen}
                Hide={HideModal}
                schoolData={selectedSchool}
              />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AllSchools;
