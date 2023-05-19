import {
  Box,
  Collapse,
  Group,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import {
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useStyles from "./style";

export function LinksGroup({ label, initiallyOpened, links, to, imgsrc }) {
  const { classes, theme, cx } = useStyles();
  const hasLinks = Array.isArray(links);
  const navigate = useNavigate();
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    <NavLink
      className={({ isActive, isPending }) =>
        isActive ? cx(classes.link, classes.linkActive) : classes.link
      }
      to={link.to}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.to);
      }}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? cx(classes.link, classes.linkActive) : classes.link
        }
        key={label}
        onClick={(e) => {
          e.preventDefault();
          navigate(to);
          setOpened((o) => !o);
        }}
        // className={classes.control}
      >
        <Group cols={2} spacing={"sm"}>
          <img src={imgsrc} className={classes.linkIcon} alt="icon" />
          <span>{label}</span>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="2rem"
              stroke={3}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? 90 : -90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </NavLink>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: rem(220),
        padding: theme.spacing.md,
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
}
