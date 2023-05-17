import { Grid, SimpleGrid } from "@mantine/core";

import PriceCard from "../../components/PriceCard";
import useStyles from "./style";

const SimplePricing = () => {
  const { classes } = useStyles();
  return (
    <>
      <div>
        <div className={classes.cardcontainer}>
          <SimpleGrid cols={3} spacing={50}>
            <PriceCard
              staff={0}
              patient={2}
              daily={5}
              src="assets/images/trial.png"
            />
            <PriceCard
              staff={4}
              patient={5}
              daily={"Unlimited"}
              theme="black"
              src="assets/images/personal.png"
            />
            <PriceCard
              staff={"Unlimited"}
              patient={"Unlimited"}
              daily={"Unlimited"}
              src="assets/images/agency.png"
            />
          </SimpleGrid>
        </div>
      </div>
    </>
  );
};

export default SimplePricing;
