import { Center, Code, Navbar } from "@mantine/core";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { LinksGroup } from "../NavbarLinksGroup";
import { useState } from "react";
import useStyles from "./style";

// import { MantineLogo } from "@mantine/ds";

const data = [
  { to: "/dashboard", label: "Dashboard", imgsrc: "assets/images/home.png" },
  {
    to: "/facility",
    label: "Facility",
    imgsrc: "assets/images/facility.png",
    links: [
      {
        label: "Facility Type",
        to: "/facilitytype",
      },
    ],
  },
  { to: "/staff", label: "Staff", imgsrc: "assets/images/people.png" },
  { to: "/patient", label: "Patient", imgsrc: "assets/images/patient.png" },
  { to: "/note", label: "Note", imgsrc: "assets/images/note.png" },
  { to: "/report", label: "Reports", imgsrc: "assets/images/report.png" },
];

export default function Nav() {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const links = data.map((item) => <LinksGroup {...item} />);

  return (
    <Navbar height={1080} width={{ sm: 382 }} p={40}>
      <Navbar.Section grow>
        <Center className={classes.header}>
          <img src="assets/images/logo3.png" alt="Logo" />
        </Center>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <img
            src="assets/images/logout.png"
            alt="logout"
            className={classes.linkIcon}
            stroke={1.5}
          />
          <span>Logout</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
