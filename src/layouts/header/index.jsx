import {
  Anchor,
  Box,
  Button,
  Center,
  Image,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    marginTop: rem(38),
  },
  linkgroup: {
    marginTop: rem(38),
    FontFamily: "Inter",
  },
  login: {
    fontFamily: "Inter",
    marginTop: rem(25),
    marginRight: rem(100),
  },
}));
const Header = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.container}>
      <Image
        src="/assets/images/logo3.png"
        width={"131"}
        height={"48"}
        mr={"auto"}
        fit="fill"
        mt={26}
        ml={99}
      />
      <SimpleGrid
        cols={3}
        spacing={75}
        mx={"auto"}
        className={classes.linkgroup}
      >
        <Anchor>
          <Center>Feature</Center>
        </Anchor>
        <Anchor>
          <Center>Plan</Center>{" "}
        </Anchor>
        <Anchor>
          <Center>Support</Center>{" "}
        </Anchor>
      </SimpleGrid>
      <Button
        color="yellow"
        ml={"auto"}
        className={classes.login}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </Box>
  );
};

export default Header;
