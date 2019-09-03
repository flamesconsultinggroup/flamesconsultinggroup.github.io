import React, {Component} from "react"
// import { Link } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import Event_Card from "../components/event_card"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Parallax } from 'react-parallax';
import Image from "../components/image";
import { Parallax, ParallaxProvider} from 'react-scroll-parallax';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default class HomePage extends Component {

  render(){
    return (
      <ParallaxProvider>
        <Layout>
          <SEO title="Home" />
          <h1 className="text-center">
            Flames Consulting Group
          </h1>

            <Parallax y={["15", "-10"]} tagOuter="figure">
              <Image photoToUse={"chicago_skyline"}/>
            </Parallax>
          <div style={{
              margin: `0 auto`,
              maxWidth: "1000px",
              padding: `0px`,
              paddingTop: "0px",
            }}>
            <h1>
              Our Purpose
            </h1>
            <p>
            Flames Consulting Group is a student organization that will provide members with the necessary resources to be prepared for the business and consulting world. We will form partnerships with companies and startup incubators to allow our members to get exposure to the professional environment. This will include staffing our members on
  projects that companies in the Chicagoland area need help with. In addition to the opportunity to work with these companies, we want to equip our members with the necessary training, education, and skill sets as outlined below:
            </p>
            <ul>
              <li>
                Speaker events where we will host professionals from the consulting industry
              </li>
              <li>
                Networking events will be provided to FCG members to expand their professional horizons
              </li>
              <li>
                Workshops and competitions to prep students for case interviews
              </li>
              <li>
                Curated courses geared towards technical and soft skill sets
              </li>
              <li>
                Mentorship program with professors in the College of Business
              </li>
              <li>
                Corporate mentorship with select business professionals
              </li>
            </ul>
            <h1>
            Our Specialties
            </h1>
            <ul>
              <li>
              Social Media Presence Development
              </li>
              <li>
                Research Development
              </li>
              <li>
                Marketing Strategy
              </li>
              <li>
                Marketing Research
              </li>
              <li>
                Marketing Development for Small Businesses and Nonprofits
              </li>
            </ul>
            <Container>
              <Row>
                <Col>
                    <h1>
                    Companies we have worked with
                    </h1>
                    <Row>
                      <Col>
                        <Image photoToUse={"accenture_logo"}/>
                      </Col>
                      <Col>
                        <Image photoToUse={"deloitte_logo"}/>
                      </Col>
                      <Col>
                        <Image photoToUse={"silverCrest_logo"}/>
                      </Col>
                      <Col>
                        <Image photoToUse={"weiss_scholarship_logo"}/>
                      </Col>
                    </Row>
                </Col>
                <Col>
                    <h1>
                      Social Media
                    </h1>
                    <Row>
                      <Col>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/flamesconsulting/?hl=en">
                         <span className="fa fa-instagram"></span>
                        </a>
                      </Col>
                      <Col>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/flamesconsultinggroup">
                           <span className="fa fa-linkedin"></span>
                        </a>
                      </Col>
                      <Col>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/flamesconsulting/">
                         <span className="fa fa-facebook"></span>
                        </a>
                      </Col>
                    </Row>
                </Col>
              </Row>

            </Container>
            <Container>

              <h1 className="text-center">
                Upcoming Events
              </h1>
              <Row>
                  <Col>
                    <Event_Card eventName="Intro to FCG" eventLocation="DH 310" eventDate="9/04/2019" eventTime="5:00-5:30pm" linkTo="https://docs.google.com/forms/d/e/1FAIpQLSfSt40BtDx05CHU4KOH3zxsdxdP64_INmcKvcYrN5TLdOcETw/viewform?usp=sf_link"/>
                  </Col>
                  <Col>
                    <Event_Card eventName="Consultant Alumni Panel" eventLocation="Rathskellar in SCE" eventDate="9/12/2019" eventTime="4:30-6:30pm" linkTo="https://docs.google.com/forms/d/e/1FAIpQLSc3t91BYXJJcUHMXFNQgHIJoHrlYKh8NxgySJsDzq-dY13ZNg/viewform?usp=sf_link"/>
                  </Col>
                  <Col>
                    <Event_Card eventName="Consulting 101" eventLocation="DH 310" eventDate="9/19/2019" eventTime="5:30-6:30pm" linkTo="https://docs.google.com/forms/d/e/1FAIpQLSfNufc8gcY7Gy5HnznbVNM2qSSQmpuEjpBX3rs_CgDb0lIGhw/viewform?usp=sf_link"/>
                  </Col>
                </Row>
            </Container>
          </div>
        </Layout>
      </ParallaxProvider>

    )
  }
}
