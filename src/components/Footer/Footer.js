import React from "react";
import InfiniteScrollText from "./InfiniteScroll";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}Bit Busters{" "}
        </div>
      </Container>
      <div>
        <InfiniteScrollText />
      </div>
    </footer>
  );
}

export default Footer;