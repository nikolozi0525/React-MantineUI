import {
  ActionIcon,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useNavigate, useNavigationType } from "react-router-dom";

import { IconChevronLeft } from "@tabler/icons-react";
import PriceCard from "../../components/PriceCard";
import useStyles from "./style";

const SimplePricing = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const onStart = () => {
    navigate("/payInfo");
  };
  const onTrial = () => {
    navigate("/dashboard");
  };
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
      <Container className={classes.centered}>
        <div className={classes.logo}>
          <img src="/assets/images/logo2.png" alt="" />
        </div>
        <Text className={classes.title}>Simple Pricing</Text>
        <Text className={classes.description}>
          Select a package that suits you
        </Text>
      </Container>
      <div className={classes.cardcontainer}>
        <SimpleGrid cols={3} spacing={50}>
          <PriceCard
            staff={0}
            patient={2}
            daily={5}
            src="/assets/images/trial.png"
            title="Trial"
          />
          <PriceCard
            staff={4}
            patient={5}
            daily={"Unlimited"}
            theme="black"
            title="Personal"
            src="/assets/images/personal.png"
            onClick={onStart}
          />
          <PriceCard
            staff={"Unlimited"}
            patient={"Unlimited"}
            daily={"Unlimited"}
            title={"Agency"}
            src="/assets/images/agency.png"
            onClick={onStart}
          />
        </SimpleGrid>
      </div>
    </>
  );
};

export default SimplePricing;
