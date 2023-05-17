import {
  Anchor,
  Button,
  Checkbox,
  Grid,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";

import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import useStyles from "./style";

const Login = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  });
  return (
    <Grid>
      <Grid.Col span={6} className={classes.left_pane}>
        <div className={classes.welcome}>
          <img
            className={classes.logo_img}
            src="assets/images/logo.png"
            alt=""
          />
          <Text fs={"italic"} fw={700} sx={{ fontFamily: "Inter" }} fz={38}>
            Welcome Back
          </Text>
          <Text c="white">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </div>

        <div>
          <img
            className={classes.glass_man}
            src="assets/images/glass_man.png"
            alt=""
          />
        </div>
        <img
          className={classes.credential}
          src="assets/images/credential.png"
          alt=""
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <div className={classes.toptitle}>
          <Text>
            Don't have an account?
            <Link className={classes.signup} to={"/signup"}>
              Sign up
            </Link>
          </Text>
        </div>
        <div className={classes.myform}>
          <Text className={classes.title}>Log in</Text>
          <form onSubmit={form.onSubmit((values) => console.log)}>
            <TextInput
              label="Email"
              width={100}
              placeholder="EG.abc@gmail.com"
              {...form.getInputProps("email")}
              size={"lg"}
            />
            <PasswordInput
              label="Password"
              placeholder="Eg.A*****"
              {...form.getInputProps("Password")}
              size={"lg"}
            />
            <div className={classes.rememberbox}>
              <Group>
                <Checkbox label="Remeber me" className={classes.rememberme} />
                <Anchor className={classes.forgot}>Forgot Password?</Anchor>
              </Group>
            </div>
            <Button color="yellow" className={classes.login_btn}>
              Log in
            </Button>
            <div>
              <Button
                variant="subtle"
                // eslint-disable-next-line jsx-a11y/alt-text
                leftIcon={<img src="assets/images/google.png" />}
                className={classes.login_btn_google}
              >
                Login with the Google
              </Button>
            </div>
          </form>
        </div>
      </Grid.Col>
    </Grid>
  );
};

export default Login;
