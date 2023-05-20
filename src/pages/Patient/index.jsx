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

import AddButton from "../../components/AddButton";
import Nav from "../../components/Navbar";
import PatientModal from "../../components/PatientModal";
import PatientTable from "../../components/PatientTable";
import Topbar from "../../components/Topbar";
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
const Patient = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Container className={classes.wrapper} fluid p={0}>
        <Nav />
        <Container fluid className={classes.content} px={40}>
          <PatientModal
            opened={opened}
            close={close}
            title={"Add New Patient"}
          />
          <Topbar title={"Patient Management"} />
          <div className={classes.btn}>
            <AddButton title={"Add New Employee"} onClick={open} />
          </div>
          <PatientTable />
        </Container>
      </Container>
    </>
  );
};

export default Patient;
