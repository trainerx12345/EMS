
import { useState } from "react";
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

const StudentDashboard = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" >
        <Col xl="14">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="text-uppercase text-muted ls-1 mb-1">
                    Terms and Conditions
                  </h3>
                  <Card className="bg-secondary shadow border-0 mt-1">
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form role="form">
                        <Container className="mt-1" >
                          <Col xl="14">
                            <Card className="mt-1">
                              <CardHeader className="bg-transparent mt-1">
                                <Row className="align-items-center">
                                  <div className="col">
                                    <p className="text-bold ls-1 mb-1">
                                    <b>Terms and Conditions</b>
                                    <br/><br/>
                                    Welcome to Exam Management System!
                                    <br/><br/>
                                    These terms and conditions outline the rules and regulations for the use of EMS Inc.'s Website, located at ems.com.
                                    <br/><br/>
                                    By accessing this website, we assume you accept these terms and conditions. Do not continue to use Exam Management System if you do not agree to take all of the terms and conditions stated on this page.
                                    <br/><br/>
                                    <b>Cookies:</b><br/><br/>
                                    The website uses cookies to help personalize your online experience. By accessing Exam Management System, you agreed to use the required cookies.
                                    <br/><br/>
                                    A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
                                    <br/><br/>
                                    We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
                                    <br/><br/>
                                    <b>License:</b><br/><br/>
                                    Unless otherwise stated, EMS Inc. and/or its licensors own the intellectual property rights for all material on Exam Management System. All intellectual property rights are reserved. You may access this from Exam Management System for your own personal use subjected to restrictions set in these terms and conditions.
                                    <br/><br/>
                                    You must not:
                                    <br/><br/>
                                    Copy or republish material from Exam Management System
                                    Sell, rent, or sub-license material from Exam Management System
                                    Reproduce, duplicate or copy material from Exam Management System
                                    Redistribute content from Exam Management System
                                    This Agreement shall begin on the date hereof.
                                    <br/><br/>
                                    Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. EMS Inc. does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of EMS Inc., its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, EMS Inc. shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                                    <br/><br/>
                                    EMS Inc. reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
                                    <br/><br/>
                                    You warrant and represent that:
                                    <br/><br/>
                                    You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
                                    The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
                                    The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy.
                                    The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                                    You hereby grant EMS Inc. a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.
                                    <br/><br/>
                                    <b>Hyperlinking to our Content:</b><br/><br/>
                                    <br/><br/>
                                    The following organizations may link to our Website without prior written approval:
                                    <br/><br/>
                                    Government agencies;
                                    Search engines;
                                    News organizations;
                                    Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                                    System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                                    These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                                    <br/><br/>
                                    We may consider and approve other link requests from the following types of organizations:
                                    <br/><br/>
                                    commonly-known consumer and/or business information sources;
                                    dot.com community sites;
                                    associations or other groups representing charities;
                                    online directory distributors;
                                    internet portals;
                                    accounting, law, and consulting firms; and
                                    educational institutions and trade associations.
                                    We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of EMS Inc.; and (d) the link is in the context of general resource information.
                                    <br/><br/>
                                    These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
                                    <br/><br/>
                                    If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to EMS Inc.. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                                    <br/><br/>
                                    Approved organizations may hyperlink to our Website as follows:
                                    <br/><br/>
                                    By use of our corporate name; or
                                    By use of the uniform resource locator being linked to; or
                                    Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.
                                    No use of EMS Inc.'s logo or other artwork will be allowed for linking absent a trademark license agreement.
                                    <br/><br/>
                                    <b>Content Liability:</b><br/><br/>
                                    We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                                    <br/><br/>
                                    <b>Reservation of Rights:</b><br/><br/>
                                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                                    <br/><br/>
                                    Removal of links from our website:
                                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.
                                    <br/><br/>
                                    We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                                    <br/><br/>
                                    <b>Disclaimer:</b><br/><br/>
                                    To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                                    <br/><br/>
                                    limit or exclude our or your liability for death or personal injury;
                                    limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                                    limit any of our or your liabilities in any way that is not permitted under applicable law; or
                                    exclude any of our or your liabilities that may not be excluded under applicable law.
                                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                                    <br/><br/>
                                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                                    </p>
                                  
                                  </div>
                                  </Row>
                                </CardHeader> 
                              </Card>
                            </Col>
                        </Container>    
                      </Form>
                    </CardBody>
                  </Card>  
                </div>
              </Row>
            </CardHeader>          
          </Card>
        </Col>    
      </Container>
    </>
  );
};

export default StudentDashboard;
