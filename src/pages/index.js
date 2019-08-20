import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';



class IndexPage extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Layout>
        <SEO title="Home" />
        <Image photoToUse={"chicago_skyline"}/>
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <h1>
          Our Purpose
          </h1>
          <p>
            Flames Consulting Group is a student organization that will provide members with the necessary resources to be prepared for the business and consulting world. We will form partnerships with companies and startup incubators to allow our members to get exposure to the professional environment. This will include staffing our members on projects that companies in the Chicagoland area need help with.
          </p>
          <h1> {/* TODO: Add Specialties*/}
          Our Specialties
          </h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          <Container>
            <Row>
              <Col>
                <h1>
                Companies we have worked with
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </Col>
              <Col>
                <h1>
                Social Media
                </h1>
                <ul>
                  <li>
                    Twitter
                  </li>
                  <li>
                    Facebook
                  </li>
                  <li>
                    Linkedin
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
