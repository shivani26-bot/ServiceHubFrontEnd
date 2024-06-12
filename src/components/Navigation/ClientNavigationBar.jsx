import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function ClientNavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = [
    {
      name: "Dashboard",
      href: "/clientDashboard",
      // to:"/clientDashboard",
      current: location.pathname === "/clientDashboard" ? true : false,
    },
    {
      name: "Bookings",
      href: "/clientBookings",
      // to:"/clientBookings",
      current: location.pathname === "/clientBookings" ? true : false,
    },

    {
      name: "Logout",
      href: "/clientLogout",
      // to:"/clientBookings",
      current: location.pathname === "/clientLogout" ? true : false,
    },
  ];

  return (
    <Navbar expand="lg" className="sticky bg-red" variant="dark">
      <Container>
        <div className="brand-images">
          <img src="/ServiceHub4.PNG" alt="Second Logo" className="logo" />
        </div>
        <Navbar.Brand className="brand">Customer Portal</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" variant="pills">
            {navigation.map((item, index) => (
              <Nav.Item style={{ marginRight: "20px" }} key={index}>
                <Nav.Link
                  // href={item.href}
                  onClick={() => navigate(item.href)}
                  className={item.current ? "active" : ""}
                >
                  {/* <Nav.Link as={Link} to={item.to} className={item.current ? "active" : ""}> */}
                  {item.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
