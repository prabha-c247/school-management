import React,{useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//css
import "./Login.scss";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");

  const handleInputChange = (e:React.ChangeEvent<any>) => {
    const value = e.target.value;

    // Check if it's a 10-digit number (basic phone number format)
    if (/^\d{10}$/.test(value)) {
      setInputType("phone");
    } else if (/^\S+@\S+\.\S+$/.test(value)) {
      // Check if it's an email address
      setInputType("email");
    } else {
      setInputType("invalid");
    }

    setInputValue(value);
  };

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    if (inputType === "phone") {
      // Handle phone number input
      console.log("Phone Number:", inputValue);
    } else if (inputType === "email") {
      // Handle email input
      console.log("Email:", inputValue);
    } else {
      // Handle invalid input
      console.log("Invalid input");
    }
  };

  return (
    <Container className="m-auto">
      <Row className="d-flex align-items-center">
        <Col md={6}>
          <img
            src={require("../../../assets/images/login.png")}
            alt="Login User"
            className="img-fluid"           
          />
        </Col>
        <Col md={6} className="form-div">
          <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="line" />
            <Form.Group controlId="formBasicEmail" className="mt-5">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter email/phone"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-5">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="m-5">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
