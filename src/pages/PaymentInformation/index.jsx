import {
  ActionIcon,
  Button,
  Card,
  Center,
  Container,
  Group,
  Radio,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";

import { DateInput } from "@mantine/dates";
import { IconChevronLeft } from "@tabler/icons-react";
import RadioCard from "../../components/RadioCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStyles } from "./style";

const PaymentInfo = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState("automatic");
  const navigate = useNavigate();
  const onPay = () => {};
  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Group className={classes.back}>
        <ActionIcon
          variant="outline"
          size={"xl"}
          radius={"xl"}
          onClick={onBack}
        >
          <IconChevronLeft />
        </ActionIcon>
        <Text>Back</Text>
      </Group>
      <Container className={classes.centered} size={"sm"}>
        <div className={classes.logo}>
          <img src="assets/images/logo2.png" alt="" />
        </div>
        <Text className={classes.title}>Payment Information</Text>
      </Container>
      <Container size={"md"}>
        <Radio.Group
          value={value}
          onChange={(v) => {
            setValue(v);
            // console.log(value);
          }}
          size="md"
          name="paytype"
        >
          <SimpleGrid cols={2} spacing={40}>
            <Radio
              className={
                value === "automatic" ? classes.selected : classes.type
              }
              value="automatic"
              size="md"
              color="yellow"
              label={
                <>
                  <Text className={classes.font1}> Automatic</Text>{" "}
                  <Text className={classes.font2}>
                    Connect to back with plaid
                  </Text>
                </>
              }
            />
            <Radio
              className={value === "manual" ? classes.selected : classes.type}
              size="md"
              color="yellow"
              value="manual"
              label={
                <>
                  <Text className={classes.font1}>Manual</Text>{" "}
                  <Text className={classes.font2}>
                    Enter card Details Manually
                  </Text>
                </>
              }
            />
          </SimpleGrid>
        </Radio.Group>
      </Container>
      <Container size={"md"}>
        <Card shadow="sm" className={classes.card} padding={40}>
          <TextInput
            label="Name on Card"
            size="lg"
            placeholder="Eg.abc"
            className={[classes.myfont, classes.m10]}
          />
          <TextInput
            label="Card Number"
            size="lg"
            placeholder="Eg.5952 **** **** ****"
            className={classes.myfont}
          />
          <SimpleGrid cols={2} className={classes.m10}>
            <DateInput
              label="Expiry Date"
              size="lg"
              placeholder="Eg.08/23"
              className={classes.myfont}
            />
            <TextInput
              label="CVV"
              size="lg"
              placeholder="Eg.***"
              className={classes.myfont}
            />
          </SimpleGrid>
        </Card>
        <Center>
          <Button
            color="yellow"
            size="lg"
            className={classes.payBtn}
            onClick={onPay}
          >
            Pay now
          </Button>
        </Center>
      </Container>
    </>
  );
};

export default PaymentInfo;
