import { Button, Container, createStyles } from "@mantine/core";

import AddButton from "../../../components/AddButton";
import NoteModal from "../../../components/NoteModal";
import NoteTypeModal from "../../../components/NoteTypeModal";
import NoteTypeTable from "../../../components/NoteTypeTable";
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
const NoteType = (props) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [isopen, setOpen] = useState(false);
  return (
    <Container fluid className={classes.content} px={40}>
      <NoteModal
        opened={isopen}
        close={() => setOpen(false)}
        title={"Add New Type"}
      />
      <NoteTypeModal
        opened={opened}
        onclose={close}
        title={"New Note Type"}
        save={setOpen}
      />
      <Topbar title={"Note Type"} />
      <div className={classes.btn}>
        <AddButton title={"Add New Note Type"} onClick={open} />
      </div>
      <NoteTypeTable />
    </Container>
  );
};

export default NoteType;
