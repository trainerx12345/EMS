import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

import { Card, CardHeader } from "reactstrap";

const Index = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/Index") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8 h-100vh">
          <Container className="mb-5">
            <div className="header-body text-center mt--4">
              <Row className="justify-content-center mb-10">
                <Col lg="5" md="6">
                  <h1 className="text-white fa-3x">Welcome to EMS</h1>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-xl-0" xl="6">
                  <Card className="bg-gradient-green shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h2 className="text-white mb-0">Be Mentor Sammy!</h2>
                          <br />
                          <iframe
                            frameborder="0"
                            width="496"
                            height="279"
                            src="https://biteable.com/watch/embed/3798352/69cead5363f19a44bec35906f418b6ed"
                            allowfullscreen="true"
                            allow="autoplay"
                          ></iframe>
                        </div>
                        <div className="col"></div>
                      </Row>
                    </CardHeader>
                  </Card>
                </Col>
                <Col xl="6">
                  <Card className="shadow">
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h2 className="text-dark-green mb-0">
                            How EMS Works.
                          </h2>
                          <br />
                          <iframe
                            frameborder="0"
                            width="496"
                            height="279"
                            src="https://biteable.com/watch/embed/3798360/bd0daab823acbe8544aeb2aeffe93def"
                            allowfullscreen="true"
                            allow="autoplay"
                          ></iframe>
                        </div>
                      </Row>
                    </CardHeader>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg> */}
          </div>
          <AuthFooter />
        </div>
        {/* Page content */}

        <Row className="justify-content-center">
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/" />
          </Switch>
        </Row>
      </div>
    </>
  );
};

export default Index;
