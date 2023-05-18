import { Card, Container, Grid, Group, SimpleGrid } from "@mantine/core";

import DashCard from "../../components/DashCard";
import DashCharts from "../../components/DashCharts";
import { DashTable } from "../../components/DashTable";
import Nav from "../../components/Navbar";
import Topbar from "../../components/Topbar";
import UserCard from "../../components/UserCard";
import useStyles from "./style";

const Dashboard = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container className={classes.wrapper} fluid p={0}>
        <Nav />
        <Container fluid className={classes.content} px={40}>
          <Topbar title={"Dashboard"} />
          <SimpleGrid cols={5} spacing={51} mt={54} mx={10}>
            <DashCard
              stock={"03"}
              title={"Active Today"}
              desc={"Total Staff"}
              total={"15"}
            />
            <DashCard
              stock={"20"}
              title={"Today Patients"}
              desc={"Today Patients"}
              total={"20"}
            />
            <DashCard
              stock={"06"}
              title={"Medican Records"}
              desc={"Records"}
              total={"06"}
            />
            <DashCard
              stock={"03"}
              title={"Active Today"}
              desc={"Incident Reports"}
              total={"04"}
            />
            <UserCard
              stock={"03"}
              title={"Active Today"}
              desc={"Total Staff"}
              total={"15"}
            />
          </SimpleGrid>
          <Grid>
            <Grid.Col md={7}>
              <Card shadow="md" mt={50} ml={10}>
                <DashTable />
              </Card>
            </Grid.Col>
            <Grid.Col md={5}>
              <DashCharts />
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
export default Dashboard;
