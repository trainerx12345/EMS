//hook
import { useState } from "react";
import { fetchCurrentUser } from "../../redux/reducers/usersSlice";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  // localStorage.setItem("isAuthenticated", "false");
  const authorization = localStorage.getItem("token");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    }
    try {
      axios
        .post("http://localhost:8080/api/v1/auth/login", {
          // headers: { Authorization: `Bearer ${authorization}` },
          email: email,
          password: password,
        })
        .then((result) => {
          dispatch(fetchCurrentUser({ ...result.data.user }));
          localStorage.setItem("userId", result.data.userId);
          localStorage.setItem("jwttoken", result.data.jwttoken);
          localStorage.setItem("token", result.data.user.token);
          localStorage.setItem("userType", result.data.user.type);
          localStorage.setItem("isAuthenticated", "true");
          console.log(result.data.user.type);
          if (result.data.user.type === "mentor") {
            history.push("/admin/index");
          }
          if (result.data.user.type === "student") {
            history.push("/student/index");
          }
        });
    } catch (Error) {
      setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
    }
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleLogin}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
                </Button>
              </div>
              {errorMessage.value && (
                <p className="text-danger"> {errorMessage.value} </p>
              )}
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
