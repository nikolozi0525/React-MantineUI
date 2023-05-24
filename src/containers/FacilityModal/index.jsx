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
const FacilityModal = ({ opened, close, title, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const [name, setName] = useState(edit ? data.data.name : "");
  const [type, setType] = useState(edit ? data.data.type : null);
  const [location, setLocation] = useState(edit ? data.data.location : "");
  const [address, setAddress] = useState(edit ? data.data.address : "");
  const [zip, setZip] = useState(edit ? data.data.zip : "");
  const [state, setState] = useState(edit ? data.data.state : null);
  const onSave = () => {
    const newFacility = { name, type, location, address, zipcode: zip, state };
    edit ? console.log(data.data) : console.log(newFacility);
    close();
  };

  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={"xl"}
      onClose={close}
      shadow="md"
      overlayProps={{ blur: 3 }}
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
          icon={<img src="/assets/images/home2.png" alt="home" />}
          placeholder="Ex: Valerie Liberty"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          label="Facility Type*"
          size="lg"
          data={["dfsd", "sdfsf", "dfdsf"]}
          icon={<img src="/assets/images/building.png" alt="home" />}
          placeholder="Select Facility Type"
          value={type}
          onChange={setType}
        />
      </SimpleGrid>
      <TextInput
        label="Address"
        size="lg"
        icon={<img src="/assets/images/location.png" alt="address" />}
        placeholder="Ex: Flate No/House No/Apt No"
        sx={{ marginTop: 20 }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextInput
        label="Address Line 2"
        size="lg"
        icon={<img src="/assets/images/location.png" alt="address" />}
        sx={{ marginTop: 20 }}
        placeholder="Place/Area etc."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <SimpleGrid cols={2} sx={{ marginTop: 20 }}>
        <TextInput
          label="Zipcode"
          size="lg"
          icon={<img src="/assets/images/location2.png" alt="address" />}
          placeholder="Ex: 00001"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <Select
          label="State"
          data={["dfsd", "sdfsf", "dfdsf"]}
          size="lg"
          placeholder="Choose One"
          value={state}
          onChange={setState}
          icon={<img src="/assets/images/map.png" alt="address" />}
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
