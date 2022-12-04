
import { useState } from "react";
import "assets/css/quiz.css";
import "assets/css/quiz.js";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  CardBody,
  Container,
  Button,
  Card,
  CardHeader,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";


// var answers = ["A", "C", "B"],
//   tot = answers.length;

  
const StudentDashboard = () => {
  
var answers = ["A", "C", "B"],
      tot = answers.length;
    
function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName); // Get radio group by-name
  for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value; // return the checked value
}

function getScore() {
  var score = 0;
  for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1; // increment only
  return score;
}

// function returnScore() {
//   // e.preventDefault();
//   console.log("score")
//   document.getElementById("myresults").innerHTML = "Your score is " + getScore() + "/" + tot;
// }



  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--9" >
      <Container className="mt--8" >
        <Col xl="14">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
                <div className="col">
                  <h3 className="text-uppercase text-muted ls-1 mb-1">
                    Midterm Exam
                  </h3>
                  
                    
                      <Form role="form" >
                        <Container className="mt--4" >
                          <Col xl="14">
                            <Card className="mt-5">
                              <CardHeader className="bg-transparent mt-10">
                                <Row className="align-items-center">
                                  <div className="col">
                                    <h4><b>Choose the Correct Answer</b></h4>
                                    <ul className="quiz">
                                      <li>
                                        <h4>An important lesson learned in online political campaigns in recent years and other collaborative efforts that had online components is?</h4>
                                        <ul className="choices">
                                          <li><label><input type="radio" name="question0" value="A"/><span> a. people much prefer to do their own thing and not work in groups</span></label></li>
                                          <li><label><input type="radio" name="question0" value="B"/><span>b. there is always a couple people who disrupt the work of others in the group</span></label></li>
                                          <li><label><input type="radio" name="question0" value="C"/><span>c. people need to be able to meet face to face at times as well as online</span></label></li>
                                          <li><label><input type="radio" name="question0" value="D"/><span>d. social media has still not lived up to its promise of helping people collaborate</span></label></li>
                                        </ul>
                                      </li>
                                      <li>
                                        <h4>The state of spam, or unwanted commercial emails, in today's Internet could best be described as?</h4>
                                        <ul className="choices">
                                          <li><label><input type="radio" name="question1" value="A"/><span>a. Increased numbers of spam messages have made email largely useless for business today.</span></label></li>
                                          <li><label><input type="radio" name="question1" value="B"/><span>b. Spammers have become far more sophisticated in their techniques to avoid spam filters.</span></label></li>
                                          <li><label><input type="radio" name="question1" value="C"/><span>c. Anti-spam legislation and technology have helped reduced spam to a five-year low.</span></label></li>
                                          <li><label><input type="radio" name="question1" value="D"/><span>d. Spam filters have largely been ineffective and spam continues to grow as a percentage of online traffic.</span></label></li>
                                        </ul>
                                      </li>
                                      <li>
                                        <h4>A website that lets anyone add, edit, or delete pages of content is called a?</h4>
                                        <ul className="choices">
                                          <li><label><input type="radio" name="question2" value="A"/><span>a. wiki</span></label></li>
                                          <li><label><input type="radio" name="question2" value="B"/><span>b. online forum</span></label></li>
                                          <li><label><input type="radio" name="question2" value="C"/><span>c. usenet</span></label></li>
                                          <li><label><input type="radio" name="question2" value="D"/><span>d. lurker site</span></label></li>
                                        </ul>
                                      </li>
                                      
                                    </ul>

                                    <button class="view-results" onClick={(e) =>{document.getElementById("myresults").innerHTML = "Your score is " + getScore() + "/" + tot; e.preventDefault()}} ><b>View Results</b></button>
                                    <span id="myresults" className="my-results"><b>My results will appear here</b></span>
                                  </div>
                                  </Row>
                                </CardHeader> 
                              </Card>
                            </Col>
                        </Container>    
                      </Form>
                    

                </div>
            </CardHeader>          
          </Card>
        </Col>    
      </Container>
            
            
      </Container>
    </>
  );
};

export default StudentDashboard;
