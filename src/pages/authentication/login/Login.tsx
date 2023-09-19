import React from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { loginSchema } from "../../../helper/formValidation";

const Login = () => {
  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
  };

  return (
    <Container className="mw-100 p-4">
      <Row className="h-100 align-items-center ">
        <Col md={6} className="d-flex align-items-center mb-3">
          <div className="text-center w-100 ">
            <img
              src={require("../../../assets/images/login.png")}
              alt="Login User"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={6} className="d-flex">
          <Formik
            initialValues={{ emailOrPhone: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Your form submission logic here
              console.log("Form values:", values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <FormikForm onSubmit={handleSubmit} className="w-100">
                <h1>Log In</h1>
                <div className="line" />

                <BootstrapForm.Group
                  controlId="formBasicEmail"
                  className="mt-5"
                >
                  <Field
                    type="text"
                    name="emailOrPhone"
                    placeholder="Enter email/phone"
                    className={`form-control ${
                      touched.emailOrPhone && errors.emailOrPhone
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="emailOrPhone"
                    component="div"
                    className="invalid-feedback"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group
                  controlId="formBasicPassword"
                  className="mt-5"
                >
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`form-control ${
                      touched.password && errors.password ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </BootstrapForm.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="m-5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </FormikForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
