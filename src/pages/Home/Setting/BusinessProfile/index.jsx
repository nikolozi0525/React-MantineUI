import {
  Box,
  Card,
  Center,
  Container,
  Grid,
  Image,
  PasswordInput,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";

import { IconCamera } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#FFDEABEE",
    display: "flex",
    flexDirection: "row",
    overflow: "visible",
  },
  camera: {
    position: "absolute",
    marginTop: 75,
    marginLeft: 75,
    background: "#FFBA45",
    borderRadius: "50%",
    padding: 5,
    [`&:hover`]: {
      cursor: "pointer",
    },
  },
  box: {
    width: 280,
    paddingTop: 47,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "#F2F2F2",
    textAlign: "center",
  },
  btn: {
    [`&:hover`]: {
      cursor: "pointer",
    },
  },
  inputIcon: {
    borderRightWidth: 1,
    borderRigthColor: "#CBCBCB",
    borderRightStyle: "solid",
    paddingRight: 5,
  },
  changepwd: {
    position: "absolute",
    color: "#FFBA45",
    fontFamily: "Inter",
    fontSize: rem(14),
    marginLeft: "auto",
    textDecoration: "underline",
    paddingBottom: 10,
    marginTop: 9,
  },
}));
const BusinessProfile = () => {
  const { classes } = useStyles();
  return (
    <Card className={classes.wrapper} pb={30}>
      <Container fluid sx={{ width: "100%" }}>
        <SimpleGrid cols={3}>
          <TextInput
            label={"Company Name*"}
            size="md"
            icon={
              <img
                src={"/assets/images/profile.png"}
                alt=""
                className={classes.inputIcon}
              />
            }
            value={"Ogiso"}
          />
          <TextInput
            label={"Email"}
            size="md"
            icon={
              <img
                src={"/assets/images/sms.png"}
                alt=""
                className={classes.inputIcon}
              />
            }
            value={"ogiso@gmail.com"}
            disabled
          />
          <TextInput
            label={"Phone number"}
            size="md"
            icon={
              <img
                src={"/assets/images/sms.png"}
                alt=""
                className={classes.inputIcon}
              />
            }
            value={"9876543215"}
          />
          <Select
            label={"Industry"}
            size="md"
            icon={
              <img
                src={"/assets/images/lock.png"}
                alt=""
                className={classes.inputIcon}
              />
            }
            data={["Assisted Living", "asfsdfs", "sfefae"]}
            value={"Assisted Living"}
          />
        </SimpleGrid>
      </Container>
    </Card>
  );
};

export default BusinessProfile;
