import {
  ActionIcon,
  Box,
  Button,
  Card,
  Group,
  Modal,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  createStyles,
} from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconPlus, IconScriptPlus, IconTrash } from "@tabler/icons-react";

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
  myfont: {
    fontFamily: "Inter",
  },
  bordered: {
    borderColor: "#00000014",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 20,
    marginTop: 20,
  },
  field: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 600,
  },
}));
const NoteTypeModal = ({ opened, onclose, title, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const onSave = () => {
    edit ? console.log(data.data) : console.log("create");
    onclose();
  };

  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={"xl"}
      onClose={onclose}
      radius={15}
      shadow="md"
      zIndex={1000}
      overlayProps={{ blur: 3 }}
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
      <Card
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB66",
          borderTopStyle: "solid",
        }}
        shadow={"xs"}
      >
        <TextInput
          label={"Note Type Name"}
          size="md"
          icon={<img src="/assets/images/home2.png" alt="home" />}
          className={classes.myfont}
          placeholder="Ex: Medication Note"
        />
      </Card>
      <Group>
        <Box sx={{ width: "90%" }} className={classes.bordered}>
          <Text>Field</Text>
          <SimpleGrid
            cols={3}
            className={classes.mwd}
            sx={{
              paddingTop: 20,
            }}
          >
            <Select
              data={["sfdsdf", "asdfsdf", "sfsdf"]}
              size="md"
              icon={<img src="/assets/images/home2.png" alt="home" />}
              placeholder="Field Name"
              className={classes.myfont}
            />
            <TextInput
              size="md"
              icon={<img src="/assets/images/building.png" alt="home" />}
              placeholder="Field Type"
              className={classes.myfont}
            />

            <Select
              size="md"
              icon={<img src="/assets/images/home2.png" alt="home" />}
              placeholder="Field Priority"
              data={["Yes", "No"]}
              className={classes.myfont}
            />
          </SimpleGrid>
        </Box>
        <ActionIcon
          color="red"
          variant="light"
          size={44}
          mt={60}
          sx={{ padding: 10 }}
        >
          <IconTrash size={"md"} />
        </ActionIcon>
      </Group>
      <Group>
        <Box sx={{ width: "90%" }} className={classes.bordered}>
          <Text>Field</Text>
          <SimpleGrid
            cols={3}
            className={classes.mwd}
            sx={{
              paddingTop: 20,
            }}
          >
            <TextInput
              size="md"
              icon={<img src="/assets/images/home2.png" alt="home" />}
              placeholder="Field Name"
              className={classes.myfont}
            />
            <Select
              data={["sfsdfse", "fesfd", "dsfefes"]}
              size="md"
              icon={<img src="/assets/images/building.png" alt="home" />}
              placeholder="Field Type"
              className={classes.myfont}
            />

            <Select
              data={["Yes", "No"]}
              size="md"
              icon={<img src="/assets/images/home2.png" alt="home" />}
              placeholder="Field Priority"
              className={classes.myfont}
            />
          </SimpleGrid>
        </Box>
        <Box>
          <ActionIcon
            color="red"
            variant="light"
            size={44}
            mt={5}
            sx={{ padding: 10 }}
          >
            <IconTrash size={"md"} />
          </ActionIcon>
          <ActionIcon color="yellow" variant="light" mt={5} size={44}>
            <IconPlus />
          </ActionIcon>
          <ActionIcon color="yellow" variant="light" mt={5} size={44}>
            <IconTrash />
          </ActionIcon>
        </Box>
      </Group>

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
          Save
        </Button>
      </SimpleGrid>
    </Modal>
  );
};

export default NoteTypeModal;
