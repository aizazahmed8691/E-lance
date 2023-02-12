import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserHeader = () => {
  return (
    <div className="userMenu">
      <Row>
        <Col sm="8">
          <ul>
            <li>
              <a href="/">
                <img
                  width="80px"
                  height="35px"
                  alt="logo"
                  src="images/Elogo.jpg"
                />
              </a>
            </li>
            <li>
              <a href="/user">Dashboard</a>
            </li>
            <li>
              <a href="//">Messages</a>
            </li>
            <li>
              <a href="/">Order</a>
            </li>
            <li>
              <a href="/gigs">Gigs</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">Earnings</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/buyer-requests">Buyer Requests</a>
            </li>
          </ul>
        </Col>
        <Col sm="4">
          <ul>
            <li>
              <a href="/">Switch to Buying</a>
            </li>
            <li>
              <img
                width="35px"
                height="35px"
                className="userimg"
                alt="userimages"
                src="images/userimg1.png"
              />
            </li>
            <NavDropdown title="" id="username">
              <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <li>
              <p className="btnnn">$20</p>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default UserHeader;
