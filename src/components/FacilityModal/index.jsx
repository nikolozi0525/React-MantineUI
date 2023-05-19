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
const FacilityModal = ({ opened, close, title, ...data }) => {
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
      shadow="md"
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
          size="lg"
          icon={<img src="assets/images/home2.png" alt="home" />}
          placeholder="Ex: Valerie Liberty"
        />
        <Select
          label="Facility Type*"
          size="lg"
          data={["dfsd", "sdfsf", "dfdsf"]}
          icon={<img src="assets/images/building.png" alt="home" />}
          placeholder="Select Facility Type"
        />
      </SimpleGrid>
      <TextInput
        label="Address"
        size="lg"
        icon={<img src="assets/images/location.png" alt="address" />}
        placeholder="Ex: Flate No/House No/Apt No"
        sx={{ marginTop: 20 }}
      />
      <TextInput
        label="Address Line 2"
        size="lg"
        icon={<img src="assets/images/location.png" alt="address" />}
        sx={{ marginTop: 20 }}
        placeholder="Place/Area etc."
      />
      <SimpleGrid cols={2} sx={{ marginTop: 20 }}>
        <TextInput
          label="Zipcode"
          size="lg"
          icon={<img src="assets/images/location2.png" alt="address" />}
          placeholder="Ex: 00001"
        />
        <Select
          label="State"
          data={["dfsd", "sdfsf", "dfdsf"]}
          size="lg"
          placeholder="Choose One"
          icon={<img src="assets/images/map.png" alt="address" />}
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

export default FacilityModal;
