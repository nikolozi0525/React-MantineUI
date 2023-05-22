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
import AlertModal from "../../../components/AlertModal";
import Nav from "../../../components/Navbar";
import StaffModal from "../../../components/StaffModal";
import StaffTable from "../../../components/StaffTable";
import Topbar from "../../../components/Topbar";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

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
const Staff = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [isopen, setOpen] = useState(false);
  return (
    // <>
    //   <Container className={classes.wrapper} fluid p={0}>
    //     <Nav />
    <Container fluid className={classes.content} px={40}>
      <AlertModal isopen={isopen} close={() => setOpen(false)} />
      <StaffModal
        opened={opened}
        onclose={close}
        save={setOpen}
        title={"Add New Staff"}
      />
      <Topbar title={"Staff Management"} />
      <div className={classes.btn}>
        <AddButton title={"Add New Employee"} onClick={open} />
      </div>
      <StaffTable />
    </Container>
    //   </Container>
    // </>
  );
};

export default Staff;
