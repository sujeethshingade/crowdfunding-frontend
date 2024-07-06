import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
{/* 
        <Nav>
          <NavItem>
            <NavLink href="#">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
*/}
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}Bit Busters{" "}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
