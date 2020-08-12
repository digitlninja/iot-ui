import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import AuthHeader from "components/headers/AuthHeader.js";
import RegisterForm from "../../../components/auth/register/RegisterForm";

const Register = () => (
  <>
    <AuthHeader title="Sign up" />
    <Container className="mt--8 pb-5">
      <Row className="justify-content-center">
        <Col lg="6" md="8">
          <Card className="bg-secondary border-0">
            <RegisterForm />
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default Register;
