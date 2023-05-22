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
import FacilityTypeModal from "../../../components/FacilityTypeModal";
import FacilityTypeTable from "../../../components/FacilityTypeTable";
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
const FacilityType = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    // <>
    //   <Container className={classes.wrapper} fluid p={0}>
    //     <Nav />
    <Container fluid className={classes.content} px={40}>
      <FacilityTypeModal
        opened={opened}
        close={close}
        title={"Facility Type"}
      />
      <Topbar title={"Facility Type"} />
      <div className={classes.btn}>
        <AddButton title={"New Facility Type"} onClick={open} />
      </div>
      <FacilityTypeTable />
    </Container>
    //   </Container>
    // </>
  );
};

export default FacilityType;
