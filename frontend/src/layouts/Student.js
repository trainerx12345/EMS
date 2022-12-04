import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import StudentNavbar from "components/Navbars/StudentNavbar.js";
import StudentFooter from "components/Footers/StudentFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import studentRoutes from "studentRoutes.js";

const Student = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return studentRoutes.map((prop, key) => {
      if (prop.layout === "/student") {
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

  const getBrandText = (path) => {
    for (let i = 0; i < studentRoutes.length; i++) {
      if (
        props.location.pathname.indexOf(
          studentRoutes[i].layout + studentRoutes[i].path
        ) !== -1
      ) {
        return studentRoutes[i].name;
      }
    }
    return "Brand";
  };

  const userType = localStorage.getItem("userType");

  return (
    <>
      <Sidebar
        {...props}
        routes={studentRoutes}
        logo={{
          innerLink: "/student/index",
          imgSrc: require("../assets/img/brand/logo3.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <StudentNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {userType === "student" ? getRoutes(studentRoutes) : null}
          <Redirect from="*" to="/student/index" />
        </Switch>
        <Container fluid>
          <StudentFooter />
        </Container>
      </div>
    </>
  );
};

export default Student;
