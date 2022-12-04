// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="bottom-4 position-fixed w-100">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted text-lighter">
                © {new Date().getFullYear()}{" "}
                
                  Exam Management System
                
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end ">
                <NavItem>
                  <NavLink
                    href="https://www.upliftcodecamp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    Terms & Conditions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.upliftcodecamp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    Facebook
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://linkedin.com"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lighter"
                  >
                    Linked-In
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
