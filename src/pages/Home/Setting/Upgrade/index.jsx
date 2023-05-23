import { Container, SimpleGrid, createStyles } from "@mantine/core";

import PlanCard from "../../../../components/PlanCard";

const Upgrade = () => {
  return (
    <Container fluid sx={{ width: "100%" }} mt={50}>
      <SimpleGrid cols={3} spacing={30}>
        <PlanCard
          title={"Personal"}
          price={"99.99"}
          desc={
            "You have use to 4 Staff Members, 5 Patients & Unlimited Daily Updates"
          }
          btn={"Upgrade Plan"}
          billing={"1 May - 1 June"}
        />
        <PlanCard
          title={"Trial"}
          price={"0.00"}
          desc={
            "You will get use 0 Staff Members, 2 Patients & 5 Daily Updates"
          }
          btn={"Start Trial"}
        />
        <PlanCard
          title={"Agency"}
          price={"259.99"}
          desc={
            "You will get use Unlimited Staff Members, Unlimited Patients & Unlimited Daily Updates"
          }
          btn={"Get Started"}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Upgrade;
