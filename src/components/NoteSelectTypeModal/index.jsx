import {
  Button,
  Group,
  Modal,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";

import NoteModal from "../NoteModal";
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
const NoteTypeSelectModal = ({ opened, onclose, title, save, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const onSave = () => {
    onclose();

    edit ? console.log(data.data) : save(true);
  };

  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={496}
      onClose={onclose}
      shadow="md"
      overlayProps={{ blur: 3 }}
      radius={"lg"}
      zIndex={1000}
      title={
        <Group>
          <img src="/assets/images/addfac.png" alt="" />
          <Text sx={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600 }}>
            {title}
          </Text>
        </Group>
      }
      centered
    >
      <Select
        label="Note Type*"
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB66",
          borderTopStyle: "solid",
          paddingBottom: 100,
        }}
        size="md"
        icon={<img src="/assets/images/home2.png" alt="home" />}
        placeholder="Ex: Marco Botton"
        data={["dsfsdf", "sdfsdfsdf", "sdfsdf"]}
      />

      <SimpleGrid
        cols={2}
        sx={{ margin: "auto", marginTop: 25, marginBottom: 10 }}
      >
        <Button
          color="yellow"
          sx={{ marginLeft: "auto", width: 122, fontFamily: "Inter" }}
          onClick={onclose}
        >
          Cancel
        </Button>
        <Button
          color="yellow"
          sx={{ marginRight: "auto", width: 122, fontFamily: "Inter" }}
          onClick={onSave}
        >
          Add
        </Button>
      </SimpleGrid>
    </Modal>
  );
};

export default NoteTypeSelectModal;
