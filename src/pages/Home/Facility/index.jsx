import {
  Button,
  Container,
  Group,
  Modal,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";

import AddButton from "../../../components/AddButton";
import FacilityModal from "../../../components/FacilityModal";
import FacilityTable from "../../../components/FacilityTable";
import Nav from "../../../components/Navbar";
import Topbar from "../../../components/Topbar";
import { useDisclosure } from "@mantine/hooks";

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
  mymodal: {
    width: 818,
  },
  mwd: {
    width: "100%",
  },
}));
const Facility = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    // <>
    //   <Container className={classes.wrapper} fluid p={0}>
    //     <Nav />
    <Container fluid className={classes.content} px={40}>
      <FacilityModal opened={opened} close={close} title={"Add New Facility"} />
      <Topbar title={"Facility Management"} />
      <div className={classes.btn}>
        <AddButton title={"Add New Facility"} onClick={open} />
      </div>
      <FacilityTable />
    </Container>
    //   </Container>
    // </>
  );
};

export default Facility;
