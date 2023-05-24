import {
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Image,
  PasswordInput,
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
  button: { width: 122, fontFamily: "Inter", fontSize: 16, fontWeight: 500 },
}));
const MyProfile = () => {
  const { classes } = useStyles();
  return (
    <>
      <Card className={classes.wrapper} p={0}>
        <Container fluid sx={{ width: "100%" }}>
          <Grid columns={100}>
            <Grid.Col span={20} className={classes.box}>
              <Center>
                <Image
                  src="/assets/images/avatar.png"
                  alt=""
                  width={111}
                  height={111}
                  onClick={() => alert("hi")}
                  className={classes.btn}
                />
                <IconCamera
                  color="white"
                  className={classes.camera}
                  onClick={() => alert("hi")}
                />
              </Center>
              <Box sx={{ marginTop: 15, marginBottom: 47 }}>
                <Text
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: rem(24),
                  }}
                >
                  Devon Lane
                </Text>
                <Text
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    color: "#979797",
                    marginTop: 11,
                  }}
                >
                  Founder & CEO
                </Text>
              </Box>
            </Grid.Col>
            <Grid.Col span={"auto"} mr={5} mt={30}>
              <Container fluid sx={{ width: "100%" }}>
                <SimpleGrid cols={2}>
                  <TextInput
                    label={"Name*"}
                    size="md"
                    icon={
                      <img
                        src={"/assets/images/profile.png"}
                        alt=""
                        className={classes.inputIcon}
                      />
                    }
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
                    disabled
                  />
                  <Box>
                    <PasswordInput
                      label={"Password"}
                      size="md"
                      icon={
                        <img
                          src={"/assets/images/lock.png"}
                          alt=""
                          className={classes.inputIcon}
                        />
                      }
                    />
                    <Text className={classes.changepwd}>Change Password</Text>
                  </Box>
                </SimpleGrid>
              </Container>
            </Grid.Col>
          </Grid>
        </Container>
      </Card>
      <SimpleGrid
        cols={2}
        sx={{ margin: "auto", marginTop: 25, marginBottom: 10 }}
      >
        <Button
          color="yellow"
          variant="light"
          className={classes.button}
          ml={"auto"}
        >
          Cancel
        </Button>
        <Button color="yellow" className={classes.button} mr={"auto"}>
          Save
        </Button>
      </SimpleGrid>
    </>
  );
};

export default MyProfile;
