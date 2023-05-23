import { Center, Code, Navbar } from "@mantine/core";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { LinksGroup } from "../NavbarLinksGroup";
import { useState } from "react";
import useStyles from "./style";

// import { NavLink } from "@mantine/core";

// import { MantineLogo } from "@mantine/ds";

const data = [
  {
    to: "dashboard",
    label: "Dashboard",
    imgsrc: "/assets/images/home.png",
  },
  {
    to: "facility",
    label: "Facility",
    imgsrc: "/assets/images/facility.png",
    links: [
      {
        label: "Facility Type",
        to: "facilitytype",
      },
    ],
  },
  { to: "staff", label: "Staff", imgsrc: "/assets/images/people.png" },
  { to: "patient", label: "Patient", imgsrc: "/assets/images/patient.png" },
  {
    to: "note",
    label: "Note",
    imgsrc: "/assets/images/note.png",
    links: [{ label: "Note Type", to: "notetype" }],
  },
  { to: "report", label: "Reports", imgsrc: "/assets/images/report.png" },
];

export default function Nav() {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const links = data.map((item) => <LinksGroup {...item} />);
  // const hasLinks = Array.isArray(links);
  // const links = data.map((item) => (
  //   <NavLink
  //     // className={({ isActive, isPending }) =>
  //     //   isActive ? cx(classes.link, classes.linkActive) : classes.link
  //     // }
  //     label={
  //       <div
  //         className={({ isActive, isPending }) =>
  //           isActive ? cx(classes.link, classes.linkActive) : classes.link
  //         }
  //       >
  //         <img src={item.imgsrc} className={classes.linkIcon} alt="icon" />
  //         <span>{item.label}</span>
  //       </div>
  //     }
  //     to={item.to}
  //     key={item.label}
  //     // childrenOffset={28}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       navigate(item.to);
  //     }}
  //   >
  //     {/* <img src={item.imgsrc} className={classes.linkIcon} alt="icon" />
  //     <span>{item.label}</span> */}
  //     {Array.isArray(item.links)
  //       ? item.links.map((sub) => (
  //           <NavLink
  //             className={({ isActive, isPending }) =>
  //               isActive ? cx(classes.link, classes.linkActive) : classes.link
  //             }
  //             to={sub.to}
  //             key={sub.label}
  //             onClick={(event) => {
  //               event.preventDefault();
  //               navigate(sub.to);
  //             }}
  //             label={sub.label}
  //           />
  //         ))
  //       : null}
  //   </NavLink>
  //   // <LinksGroup {...item} />
  // ));

  return (
    <Navbar height={1000} width={{ sm: 382 }} p={40}>
      <Navbar.Section grow>
        <Center className={classes.header}>
          <img src="/assets/images/logo3.png" alt="Logo" />
        </Center>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Link
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <img
            src="/assets/images/logout.png"
            alt="logout"
            className={classes.linkIcon}
            stroke={1}
          />
          <span>Logout</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
