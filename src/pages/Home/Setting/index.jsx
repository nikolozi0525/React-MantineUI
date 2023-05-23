import {
  Card,
  Container,
  Grid,
  Tabs,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import BusinessProfile from "./BusinessProfile";
import MyProfile from "./MyProfie";
import Topbar from "../../../components/Topbar";
import Upgrade from "./Upgrade";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  tabs: {
    marginTop: 50,
    fontFamily: "Inter",
    marginLeft: 10,
    marginRight: 10,
  },
  tab: {
    fontFamily: "Inter",
    fontSize: rem(22),
    paddingLeft: 50,
    paddingRight: 50,
  },
  mymodal: {
    width: 818,
  },
  mwd: {
    width: "100%",
  },
}));
const Setting = () => {
  const { classes } = useStyles();
  return (
    <Container fluid className={classes.content} px={40}>
      <Topbar title={"Settings"} />
      <Tabs className={classes.tabs}>
        <Tabs.List>
          <Tabs.Tab className={classes.tab} value="myprofile" color="yellow">
            My Profile
          </Tabs.Tab>
          <Tabs.Tab className={classes.tab} value="business" color="yellow">
            Business Profile
          </Tabs.Tab>
          <Tabs.Tab className={classes.tab} value="upgrade" color="yellow">
            Upgrade Plan
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="myprofile">
          <MyProfile />
        </Tabs.Panel>
        <Tabs.Panel value="business">
          <BusinessProfile />
        </Tabs.Panel>
        <Tabs.Panel value="upgrade">
          <Upgrade />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Setting;
