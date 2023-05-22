import { Card, Container, Grid, Tabs, Text, createStyles } from "@mantine/core";

import Topbar from "../../../components/Topbar";

const useStyles = createStyles((theme) => ({}));
const Setting = () => {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.content} px={40}>
      <Topbar title={"Settings"} />
      <Grid>
        <Tabs>
          <Tabs.List>
            <Tabs.Tab value="myprofile">My Profile</Tabs.Tab>
            <Tabs.Tab value="business">Business Profile</Tabs.Tab>
            <Tabs.Tab value="upgrade">Upgrade Plan</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="myprofile"></Tabs.Panel>
          <Tabs.Panel value="business"></Tabs.Panel>
          <Tabs.Panel value="upgrade"></Tabs.Panel>
        </Tabs>
      </Grid>
    </Container>
  );
};

export default Setting;
