import {
  Button,
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
}));
const NoteModal = ({ opened, close, title, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const onSave = () => {
    edit ? console.log(data.data) : console.log("create");
    close();
  };

  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={"xl"}
      onClose={close}
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
      <SimpleGrid
        cols={2}
        className={classes.mwd}
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB66",
          borderTopStyle: "solid",
        }}
      >
        <TextInput
          label="Facility Name*"
          size="md"
          icon={<img src="/assets/images/home2.png" alt="home" />}
          placeholder="Ex: Valerie Liberty"
          className={classes.myfont}
          value={"Progress Note"}
          disabled
        />
        <TextInput
          label="Facility Type*"
          size="md"
          icon={<img src="/assets/images/building.png" alt="home" />}
          placeholder="Select Facility Type"
          className={classes.myfont}
        />

        <DateInput
          label="Date"
          size="md"
          icon={<img src="/assets/images/home2.png" alt="home" />}
          placeholder="Ex: 17/23/2023"
          className={classes.myfont}
        />
        <TimeInput
          label="Time"
          size="md"
          icon={<img src="/assets/images/building.png" alt="home" />}
          placeholder="Select Facility Type"
          className={classes.myfont}
        />

        <TextInput
          label="Facility Name*"
          size="md"
          icon={<img src="/assets/images/location2.png" alt="address" />}
          placeholder="Ex: 00001"
          className={classes.myfont}
        />
        <Select
          label="Patient Name*"
          data={["dfsd", "sdfsf", "dfdsf"]}
          size="md"
          placeholder="Choose One"
          className={classes.myfont}
          icon={<img src="/assets/images/map.png" alt="address" />}
        />
      </SimpleGrid>
      <Textarea
        placeholder="Today Adam made..."
        icon={<img src="/assets/images/building.png" alt="home" />}
        label="Description"
        size="md"
        sx={{
          paddingTop: 20,
        }}
      />
      <SimpleGrid
        cols={2}
        sx={{ margin: "auto", marginTop: 25, marginBottom: 10 }}
      >
        <Button
          color="yellow"
          sx={{ marginLeft: "auto", width: 122, fontFamily: "Inter" }}
          onClick={close}
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

export default NoteModal;
