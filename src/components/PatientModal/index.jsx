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

import { DateInput } from "@mantine/dates";

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
    marginTop: 20,
  },
}));
const PatientModal = ({ opened, close, title, ...data }) => {
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
      size={610}
      onClose={close}
      shadow="md"
      radius={15}
      zIndex={1000}
      title={
        <Group>
          <img src="assets/images/addfac.png" alt="" />
          <Text sx={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600 }}>
            {title}
          </Text>
        </Group>
      }
      centered
    >
      <TextInput
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB66",
          borderTopStyle: "solid",
        }}
        className={classes.myfont}
        label="Full Name*"
        size="lg"
        icon={<img src="assets/images/home2.png" alt="home" />}
        placeholder="Ex: Valerie Liberty"
      />
      <DateInput
        className={classes.myfont}
        label="Date of birth*"
        size="lg"
        icon={<img src="assets/images/home2.png" alt="home" />}
        placeholder="Ex: 04/02/1993"
      />
      <SimpleGrid cols={2} className={classes.mwd}>
        <Select
          className={classes.myfont}
          label="Facility Type*"
          size="lg"
          data={["dfsd", "sdfsf", "dfdsf"]}
          icon={<img src="assets/images/building.png" alt="home" />}
          placeholder="Select Facility Type"
        />
        <Select
          className={classes.myfont}
          label="Facility Name*"
          size="lg"
          data={["dfsd", "sdfsf", "dfdsf"]}
          icon={<img src="assets/images/building.png" alt="home" />}
          placeholder="Select Facility Name"
        />
      </SimpleGrid>
      <SimpleGrid cols={2} className={classes.mwd}>
        <TextInput
          className={classes.myfont}
          label="Guardian Name*"
          size="lg"
          icon={<img src="assets/images/location.png" alt="address" />}
          placeholder="Ex: Wife Newman"
          sx={{ marginTop: 20 }}
        />
        <TextInput
          className={classes.myfont}
          label="Guardian Phone*"
          size="lg"
          icon={<img src="assets/images/location.png" alt="address" />}
          sx={{ marginTop: 20 }}
          placeholder="+1-245-786-2436"
        />
      </SimpleGrid>

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

export default PatientModal;
