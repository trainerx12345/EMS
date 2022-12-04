import { Link } from "react-router-dom";
import StudentDashboard from "views/examples/StudentDashboard";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";


const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            
              EMS
            
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="./src/vews/examples/Terms.js"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms & Conditions
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Facebook
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href=""
                rel="noopener noreferrer"
                target="_blank"
              >
                Linked-In
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
