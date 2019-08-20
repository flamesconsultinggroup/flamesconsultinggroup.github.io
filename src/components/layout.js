/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link} from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Header from "./header"
import "./layout.css"

import logo from "../images/fcg_logo_corrected.png"
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar dark style={{backgroundColor: '#8d0707'}} sticky="top" expand="lg">
          <NavbarBrand href="/" className="mr-auto">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="FCG"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Our Team
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Executive_Board/">
                    Executive Board
                  </DropdownItem>
                  <DropdownItem href="/Founding_Team/">
                    Founding Team
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Pro_Bono_Cases/">
                    Pro Bono Cases
                  </DropdownItem>
                  <DropdownItem href="/Case_Studies/">
                    Case Studies
                  </DropdownItem>
                  <DropdownItem href="/Professional_Development/">
                    Professional Development
                  </DropdownItem>
                  <DropdownItem href="/Career_Development/">
                    Career Development
                  </DropdownItem>
                  <DropdownItem href="/Additional_Resources/">
                    Additional Resources
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/Accomplishments/">Accomplishments</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Gallery/">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Membership/">Membership Services</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  News Media
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/World_News/">
                    World News
                  </DropdownItem>
                  <DropdownItem href="/Blog/">
                    Blog
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
