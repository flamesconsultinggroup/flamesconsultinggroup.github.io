import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap';
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';



class Executive_Board extends React.Component {

  render(){
    return (
      <Layout>
        <SEO title="Executive Board" />
        <div>
          <Container>
            <h1 className="text-center">
              President and Founder
            </h1>
            <Row>
              <Col>
                <Image photoToUse={"karina_utyuzh_headshot"}/>
              </Col>
              <Col>
                <h3>
                  Karina Utyuzh
                </h3>
                <p>
                  Starting Flames Consulting Group has not been an easy task, but it has been the most amazing endeavor I’ve ever decided to throw myself into, however, without my team, there would be no Flames Consulting Group. I love these people and their patience, work, and dedication: it inspires me every single day to be the best President & Founder there has been at UIC. My name is Karina Utyuzh, and I am a sophomore double-majoring in Accounting & Finance, and minoring in Business Analytics. I am the President and Founder of FCG. I am hoping to close the deprived consulting gap here at our wonderful university. With a strong foundation, a strong team, and strong persistence, FCG will break barriers and move forward in unspeakable ways.
                </p>
              </Col>
            </Row>
            <h1 className="text-center">
              Vice President
            </h1>
            <Row>
              <Col>
                <h3>
                  Safia Ghouse
                </h3>
                <p>
                  Starting Flames Consulting Group has not been an easy task, but it has been the most amazing endeavor I’ve ever decided to throw myself into, however, without my team, there would be no Flames Consulting Group. I love these people and their patience, work, and dedication: it inspires me every single day to be the best President & Founder there has been at UIC. My name is Karina Utyuzh, and I am a sophomore double-majoring in Accounting & Finance, and minoring in Business Analytics. I am the President and Founder of FCG. I am hoping to close the deprived consulting gap here at our wonderful university. With a strong foundation, a strong team, and strong persistence, FCG will break barriers and move forward in unspeakable ways.
                </p>
              </Col>
              <Col>
                <Image photoToUse={"safia_ghouse_headshot"}/>
              </Col>
            </Row>
            <h1 className="text-center">
              Director of External Communications
            </h1>
            <Row>
              <Col>
                <Image photoToUse={"christopher_campagna_headshot"}/>
              </Col>
              <Col>
                <h3>
                  Christopher Campagna
                </h3>
                <p>
                  I am an incoming senior Accounting and Management Information Systems double major working towards a career in management/strategy consulting. Relationship building is something that I take pride in and enjoy. A business is only as strong as the people-the relationships-that support it. Collaborating in a dynamic group setting is where I find that I am the most creative and able to produce my best work. This summer, I will be working with PwC at their Chicago office as a START intern, conducting a variety of rotations within their Internal Firm Services department. I am excited to bring back all of the gained knowledge and experience to FCG. Outside of my professional life, I am a practitioner of Brazilian Jiu-Jitsu, finding the study of martial arts fascinating. I have also been skydiving twice, with plans to return to complete my “A” license.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

      </Layout>
    )
  }
}

export default Executive_Board;
