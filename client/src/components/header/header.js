import React from 'react';
import {
  Navbar,
  Nav
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoggedIn: nextProps.isLoggedIn });  
  }
  
  render() {

    if(this.state.isLoggedIn) {
      return (
        <>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Link className="nav-link nav-brand" exact="true" to="/items">Coverage</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" exact="true" to="/items">My Items</Link>
                <Link className="nav-link" to="/add">Add</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    } else {
      return (
        <>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Link className="nav-link nav-brand" exact="true" to="/items">Coverage</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/new-user">New User</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </>
      );
    }
    
  }
}

export default Header;