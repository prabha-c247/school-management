import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//Formik validation
import { useFormik } from "formik";
import SchoolNavbar from "../school-navbar/SchoolNavbar";
//css
import styles from "./AddSchool.module.scss";
//validation
import { validateSchema } from "../../../helper/formValidation";

const AddSchool = () => {
  const formik = useFormik({
    initialValues: {
      schoolLogo: "",
      schoolName: "",
      schoolType: "",
      affiliation: "",
      identificationNumber: "",
      schoolMobileNumber: "",
      schoolMailId: "",
      principalName: "",
      principalContact: "",
      studentAddress: "",
      studentCity: "",
      studentPinCode: "",
      userName: "",
      createPassword: "",
      confirmPassword: "",
      termsCondition: true,
    },
    validationSchema: validateSchema, // Use the validation schema you defined
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // const postData = { ...values };
      // const response = await axios.post("/your/api/endpoint", postData);
      // console.log("Response:", response.data);
      resetForm();
      console.log("Form submitted!", values);
    },
  });

  return (
    <Container>
      <Row>
        <Col>
          <SchoolNavbar />
          <Form.Group className={styles.form_plan}>
            <Row className="mb-3">
              <h5>School Details</h5>
              <Col sm={3}>
                <Form.Label htmlFor="schoolLogo">School logo</Form.Label>
                <Form.Control
                  type="file"
                  id="schoolLogo"
                  onBlur={formik.handleBlur}
                  value={formik.values.schoolLogo}
                  onChange={formik.handleChange}
                />
              </Col>
              <Col sm={9}>
                <Row>
                  <Col sm={6}>
                    <Form.Label htmlFor="schoolName">School Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="schoolName"
                      placeholder="St. Mary H.S. School"
                      value={formik.values.schoolName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.schoolName && formik.errors.schoolName && (
                      <div className="text-danger">
                        {formik.errors.schoolName}
                      </div>
                    )}
                  </Col>
                  <Col sm={6}>
                    <Form.Label htmlFor="schoolType">School Type</Form.Label>
                    <Form.Select
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="schoolType"
                    >
                      <option>Government</option>
                      <option>Private</option>
                    </Form.Select>
                    {formik.touched.schoolType && formik.errors.schoolType && (
                      <div className="text-danger">
                        {formik.errors.schoolType}
                      </div>
                    )}
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="affiliation">
                      School Affiliation
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Affiliation with educational boards of bodies"
                      id="affiliation"
                      value={formik.values.affiliation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="identificationNumber">
                      School Affiliation
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="01234567890"
                      id="identificationNumber"
                      value={formik.values.identificationNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="schoolMobileNumber">
                      School Mobile Number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="+91-1234567890"
                      id="schoolMobileNumber"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.schoolMobileNumber}
                    />
                    {formik.touched.schoolMailId &&
                      formik.errors.schoolMobileNumber && (
                        <div className="text-danger">
                          {formik.errors.schoolMobileNumber}
                        </div>
                      )}
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="schoolMailId">
                      School Mail Id
                    </Form.Label>
                    <Form.Control
                      type="mail"
                      placeholder="Schoolmailid@gmail.com
                      +"
                      id="schoolMailId"
                      value={formik.values.schoolMailId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.schoolMailId &&
                      formik.errors.schoolMailId && (
                        <div className="text-danger">
                          {formik.errors.schoolMailId}
                        </div>
                      )}
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="principalName">
                      Principal Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="School Principal Name"
                      id="principalName"
                      value={formik.values.principalName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Col>
                  <Col sm={6} className="mt-4">
                    <Form.Label htmlFor="principalContact">
                      Principal Contact Information
                    </Form.Label>
                    <Form.Control
                      type="mail"
                      placeholder="Principalmailid@gmail.com"
                      id="principalContact"
                      value={formik.values.principalContact}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.principalContact &&
                      formik.errors.principalContact && (
                        <div className="text-danger">
                          {formik.errors.principalContact}
                        </div>
                      )}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-3">
              <Form.Label htmlFor="studentAddress">Address</Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={formik.values.studentAddress}
                  placeholder="Student Address"
                  id="studentAddress"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={formik.values.studentCity}
                  placeholder="City/Village"
                  id="studentCity"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col sm={4}>
                <Form.Control
                  type="text"
                  value={formik.values.studentPinCode}
                  placeholder="Pin Code"
                  id="studentPinCode"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <h5>Security & Password</h5>
              <Col sm={6}>
                <Form.Label htmlFor="userName">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="@School.ID123"
                  id="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Col>
              <Col sm={6}>
                <Form.Label htmlFor="createPassword">
                  Create Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Unique Password"
                  id="createPassword"
                  onBlur={formik.handleBlur}
                  value={formik.values.createPassword}
                  onChange={formik.handleChange}
                />                
              </Col>
              <Col sm={6}>
              <div className="mt-2">
                  <Form.Label htmlFor="confirmPassword">
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re enter Password"
                    id="confirmPassword"
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                </div>
              </Col>
            </Row>
            <Row className="mt-3 ">
              <Col className="d-flex justify-content-end">
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    id="termsCondition"
                    label="Terms and Conditions"
                    checked={formik.values.termsCondition}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="d-flex justify-content-end">
                <Button variant="primary" className={styles.submit_btn} style={{ borderRadius: "60px" }}>
                  Submit
                </Button>
                <input
                  type="reset"
                  value="Clear/Reset"
                  className={styles.clear_btn}
                  onClick={formik.handleReset}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSchool;
