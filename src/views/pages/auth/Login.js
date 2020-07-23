import React from "react";
import { Card, Container, Row, Col } from "reactstrap";
import AuthHeader from "components/Headers/AuthHeader.js";
import { LoginForm } from "../../../components/";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <AuthHeader title="Welcome!" lead="Login to your awesome ThreeSprints IOT Dashboard." />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
                <LoginForm />
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="6">
              <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
