
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  CardTitle,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Student Lists</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Old</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">New</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              {/* Start of Contents */}
              <>  
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-">
                  <Container fluid>
                    <div className="header-body">
                      {/* Card stats */}
                      <Row>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-2 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    DICT Batch-1
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">
                                    25
                                  </span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    Batch 13
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">20</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    II-Kampupot
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">4</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    Batch 16
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">35</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-percent" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      {/* Card stats */}
                      <Row>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    III-Rose
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">
                                    29
                                  </span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    IV-Narra
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">14</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    II-Ilang-Ilang
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">22</span>
                                </div>
                                <Col className="col-auto">
                                <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    Batch 21
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">88</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      {/* Card stats */}
                      <Row>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    I-Einstein
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">
                                    25
                                  </span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    IV-Sampaguita
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">24</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    IV-Rose
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">16</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6" xl="3">
                          <Card className="card-stats mb-4 mb-xl-4">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle
                                    tag="h5"
                                    className="text-uppercase text-muted mb-0"
                                  >
                                    DICT-Batch 2
                                  </CardTitle>
                                  <span className="h2 font-weight-bold mb-0">35</span>
                                </div>
                                <Col className="col-auto">
                                  <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                                    <i className="fas fa-users" />
                                  </div>
                                </Col>
                              </Row>
                              <b className="mt-3 mb-0 text-muted text-sm">
                                <Link to="">Open List</Link>
                              </b>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
              </>
              


            </Card>
          </Col> 
        </Row>
      </Container>
    </>
  );
};

export default Index;
