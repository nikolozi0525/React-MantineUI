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
  typeInput: {
    borderTopColor: "#CBCBCB66",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    fontFamily: "Inter",
    paddingTop: 20,
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
      size={"md"}
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
      <TextInput
        className={classes.typeInput}
        label="Facility Type Name"
        size="lg"
        icon={<img src="assets/images/building.png" alt="home" />}
        placeholder="Enter Facility type name"
      />
      <SimpleGrid
        cols={2}
        sx={{ margin: "auto", marginTop: 25, marginBottom: 10 }}
      >
        <Button
          color="yellow"
          sx={{ marginLeft: "auto", width: 110, fontFamily: "Inter" }}
          onClick={close}
          radius={8}
        >
          Cancel
        </Button>
        <Button
          color="yellow"
          radius={8}
          sx={{ marginRight: "auto", width: 110, fontFamily: "Inter" }}
          onClick={onSave}
        >
          Save
        </Button>
      </SimpleGrid>
    </Modal>
  );
};

export default FacilityModal;
