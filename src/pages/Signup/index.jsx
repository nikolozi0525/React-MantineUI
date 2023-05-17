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

import { IconBrandGoogle } from "@tabler/icons-react";
import axios from "axios";
import { useForm } from "@mantine/form";
import useStyles from "./style";

const Signup = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      rememberme: false,
    },
  });
  const signup = () => {
    alert(form.values.name);
    // axios.post('localhost:3000')
  };
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
            src="assets/images/beanbag.png"
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
            Already have an account?
            <Anchor className={classes.signup}>Login</Anchor>
          </Text>
        </div>
        <div className={classes.myform}>
          <Text className={classes.title}>Sign up</Text>
          <form onSubmit={form.onSubmit((values) => console.log)}>
            <TextInput
              label="Name"
              width={100}
              placeholder="EG.abc"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              width={100}
              placeholder="EG.abc@gmail.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Eg.A*****"
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Re-enter Password"
              placeholder="Eg.A*****"
              {...form.getInputProps("repassword")}
            />
            <div className={classes.rememberbox}>
              <Group>
                <Checkbox
                  label={"I agree with the Terms of Service and Privacy policy"}
                  className={classes.rememberme}
                />
              </Group>
            </div>
            <Button
              color="yellow"
              className={classes.login_btn}
              onClick={signup}
            >
              Sign up
            </Button>
            <div>
              <Button
                variant="subtle"
                leftIcon={<IconBrandGoogle />}
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

export default Signup;
