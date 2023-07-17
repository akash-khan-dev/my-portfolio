"use client";
import Logo from "@/SVG/Logo";
import Menudata from "@/data/Menudata";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});
const Menubar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link href="#">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Menudata.map((menu, i) => (
                <Link
                  className={DmSans.className + " " + "mx-3"}
                  key={i}
                  href={menu.url}
                >
                  {menu.title}
                </Link>
              ))}
            </Nav>

            <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
