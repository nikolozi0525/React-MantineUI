import { Center, Code, Navbar } from "@mantine/core";

import { Link } from "react-router-dom";
import { useState } from "react";
import useStyles from "./style";

// import { MantineLogo } from "@mantine/ds";

const data = [
  { to: "", label: "Dashboard", imgsrc: "assets/images/home.png" },
  { to: "", label: "Facility", imgsrc: "assets/images/facility.png" },
  { to: "", label: "Staff", imgsrc: "assets/images/people.png" },
  { to: "", label: "Patient", imgsrc: "assets/images/patient.png" },
  { to: "", label: "Note", imgsrc: "assets/images/note.png" },
  { to: "", label: "Reports", imgsrc: "assets/images/report.png" },
];

export default function Nav() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Dashboard");

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <img src={item.imgsrc} className={classes.linkIcon} alt="icon" />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={700} width={{ sm: 382 }} p={40}>
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
