import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "reactstrap";
import AuthHeader from "../../../components/headers/AuthHeader.js";
import { LoginForm } from "../../../components/";

const Login = () => {
  return (
    <>
      <AuthHeader
        title="Welcome!"
        lead="Login to your Three Sprints dashboard"
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0 mb-0">
              <LoginForm />
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs="6">
            <Link className="text-muted" to="#pablo">
              <small>Forgot password?</small>
            </Link>
          </Col>
          <Col className="text-right" xs="6">
            <Link className="text-muted" to="/register">
              <small>Create new account</small>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
