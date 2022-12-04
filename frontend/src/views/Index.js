import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const logo = require("../assets/img/brand/infoGraphics.jpg");

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Col className="mt--8 ml-4 mb-5 mb-xl-0 " xl="6" >
                  <h2 className="text-white">
                    Welcome to EMS, your Buddy to Examinations!
                  </h2>
                  
                  <h4 className="text-white">
                    To know more about EMS, please take time to watch infographic videos below.
                  </h4>
                  
        </Col>

      <Container className="mt-4 mb-10" fluid>
      
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
                      width="530"
                      height="288"
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
                    <h2 className="text-green mb-0">How EMS Works.</h2>
                    <br />
                    <iframe
                      frameborder="0"
                      width="530"
                      height="288"
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
      </Container>
    </>
  );
};

export default Index;
