import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import AuthHeader from "../../../components/headers/AuthHeader.js";
import { ConfirmPasswordForm } from "../../../components";

const ConfirmPassword = () => {
  return (
    <>
      <AuthHeader title="Reset password" lead="We sent a code to your email." />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0 mb-0">
              <ConfirmPasswordForm />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConfirmPassword;
