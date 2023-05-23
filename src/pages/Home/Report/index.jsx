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
import EmptyReport from "../../../components/EmptyReport";
import ReportModal from "../../../components/ReportModal";
import ReportTable from "../../../components/ReportTable";
import Topbar from "../../../components/Topbar";
import { useDisclosure } from "@mantine/hooks";

// import Nav from "../../components/Navbar";

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
const Reports = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container fluid className={classes.content} px={40}>
      <ReportModal opened={opened} onclose={close} title={"Add New Patient"} />
      <Topbar title={"Reports"} />
      <div className={classes.btn}>
        <AddButton title={"Add New Report"} onClick={open} />
      </div>
      {/* <EmptyReport /> */}
      <ReportTable />
    </Container>
  );
};

export default Reports;
