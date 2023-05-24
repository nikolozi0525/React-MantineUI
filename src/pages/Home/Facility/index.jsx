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
import FacilityModal from "../../../containers/FacilityModal";
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
const temp = [
  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: false,
  },
  {
    name: "John's Assisted Living",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: true,
  },
  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: false,
  },

  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: true,
  },
  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: false,
  },
];
const Facility = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container fluid className={classes.content} px={40}>
      <FacilityModal opened={opened} close={close} title={"Add New Facility"} />
      <Topbar title={"Facility Management"} />
      <div className={classes.btn}>
        <AddButton title={"Add New Facility"} onClick={open} />
      </div>
      <FacilityTable data={temp} />
    </Container>
  );
};

export default Facility;
