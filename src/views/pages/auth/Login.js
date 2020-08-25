import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import AuthHeader from "../../../components/headers/AuthHeader.js";
import { LoginForm } from "../../../components/";

const Login = () => {
  return (
    <>
      <AuthHeader title="Login" />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0 mb-0">
              <LoginForm />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
