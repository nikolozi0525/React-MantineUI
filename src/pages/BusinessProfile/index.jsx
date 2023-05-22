import {
  ActionIcon,
  Button,
  Checkbox,
  Grid,
  Group,
  Select,
  Text,
  TextInput,
} from "@mantine/core";

import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useForm } from "@mantine/form";
import useStyles from "./style";

const BusinessProfile = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  });
  return (
    <Grid className={classes.myfont}>
      <Grid.Col span={6} className={classes.left_pane}>
        <div className={classes.welcome}>
          <img
            className={classes.logo_img}
            src="/assets/images/logo.png"
            alt=""
          />
          <Text fs={"italic"} fw={700} sx={{ fontFamily: "Inter" }} fz={38}>
            Fill-up Your Business Profile
          </Text>
          <Text c="white" fz={18} sx={{ fontFamily: "Inter" }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </div>

        <div>
          <img
            className={classes.glass_man}
            src="/assets/images/businessman.png"
            alt=""
          />
        </div>
        <img
          className={classes.credential}
          src="/assets/images/credential.png"
          alt=""
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <div className={classes.toptitle}>
          <Link className={classes.signup} to={"/selectprice"}>
            <Group>
              Next
              <ActionIcon
                variant="light"
                size={"lg"}
                radius="xl"
                color="yellow"
              >
                <IconArrowRight />{" "}
              </ActionIcon>
            </Group>
          </Link>
        </div>
        <div className={classes.myform}>
          <Text className={classes.title}>Business Profile</Text>
          <form onSubmit={form.onSubmit((values) => console.log)}>
            <div className={classes.inputs}>
              <TextInput
                label="Company Name"
                width={100}
                placeholder="Eg.abc"
                {...form.getInputProps("company_name")}
                size={"lg"}
                className={classes.myfont}
              />
            </div>
            <div className={classes.inputs}>
              <TextInput
                className={classes.myfont}
                label="Email"
                width={100}
                placeholder="Eg.abc@gmail.com"
                {...form.getInputProps("email")}
                size={"lg"}
              />
            </div>
            <div className={classes.inputs}>
              <TextInput
                className={classes.myfont}
                label="Phone Number"
                width={100}
                placeholder="EG.9876543215"
                {...form.getInputProps("phone")}
                size={"lg"}
              />
            </div>

            <div className={classes.inputs}>
              <Select
                label="Industry"
                placeholder="Select Industry"
                size="lg"
                className={classes.myfont}
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
            </div>
            <div className={classes.rememberbox}>
              <Checkbox
                size={"md"}
                label={
                  <div className={classes.myfont}>
                    I agree with{" "}
                    <Link className={classes.forgot}>Terms of Service</Link> and{" "}
                    <Link className={classes.forgot}>Privacy Policy</Link>
                  </div>
                }
                className={classes.rememberme}
              />
            </div>
            <Button color="yellow" className={classes.login_btn}>
              Continue
            </Button>
            <Link to={""}>
              <Text
                sx={{
                  fontFamily: "Inter",
                  fontSize: 20,
                  color: "#FFBA45",
                  textDecoration: "underline",
                  marginTop: 24,
                }}
              >
                Learn More
              </Text>{" "}
            </Link>
          </form>
        </div>
      </Grid.Col>
    </Grid>
  );
};

export default BusinessProfile;
