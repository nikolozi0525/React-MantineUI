import { Container, createStyles } from "@mantine/core";

import AddButton from "../../components/FacilityButton";
import FacilityTable from "../../components/FacilityTable";
import Nav from "../../components/Navbar";
import Topbar from "../../components/Topbar";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  btn: {
    marginLeft: "auto",
    marginTop: 50,
  },
}));
const Facility = (props) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.wrapper} fluid p={0}>
      <Nav />
      <Container fluid className={classes.content} px={40}>
        <Topbar title={"Facility Management"} />
        <div className={classes.btn}>
          <AddButton title={"Add New Facility"} />
        </div>
        <FacilityTable />
      </Container>
    </Container>
  );
};

export default Facility;
