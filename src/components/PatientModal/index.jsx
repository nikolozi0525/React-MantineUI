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
    overflow: "visible",
  },
  mwd: {
    width: "100%",
  },
  myfont: {
    fontFamily: "Inter",
    marginTop: 20,
    overflow: "visible",
  },
}));
const PatientModal = ({ opened, close, title, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const [name, setName] = useState(edit ? data.data.name : "");
  const [dob, setDob] = useState(edit ? new Date(data.data.dob) : "");
  const [facility_type, setFacilityType] = useState(
    edit ? data.data.facility_type : null
  );
  const [facility_name, setFacilityName] = useState(
    edit ? data.data.facility_name : null
  );
  const [guardian_name, setGuardianName] = useState(
    edit ? data.data.guardian_name : ""
  );
  const [guardian_phone, setGuardianPhone] = useState(
    edit ? data.data.guardian_phone : ""
  );

  const onSave = () => {
    const new_patient = {
      name,
      dob,
      facility_type,
      facility_name,
      guardian_name,
      guardian_phone,
      active: false,
    };
    console.log(dob);
    edit ? console.log(data.data) : console.log(dob);
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
      overlayProps={{ blur: 3 }}
      zIndex={1000}
      lockScroll={true}
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
      <TextInput
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB66",
          borderTopStyle: "solid",
        }}
        className={classes.myfont}
        label="Full Name*"
        size="md"
        icon={<img src="/assets/images/home2.png" alt="home" />}
        placeholder="Ex: Valerie Liberty"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DateInput
        className={classes.myfont}
        label="Date of birth*"
        valueFormat="MM/DD/YYYY"
        size="md"
        icon={<img src="/assets/images/home2.png" alt="home" />}
        placeholder="Ex: 04/02/1993"
        value={dob}
        onChange={setDob}
      />
      <SimpleGrid cols={2} className={classes.mwd}>
        <Select
          className={classes.myfont}
          label="Facility Type*"
          size="md"
          data={["dfsd", "sdfsf", "dfdsf"]}
          icon={<img src="/assets/images/building.png" alt="home" />}
          placeholder="Select Facility Type"
          value={facility_type}
          onChange={setFacilityType}
        />
        <Select
          className={classes.myfont}
          label="Facility Name*"
          size="md"
          data={["dfsd", "sdfsf", "dfdsf"]}
          icon={<img src="/assets/images/building.png" alt="home" />}
          placeholder="Select Facility Name"
          value={facility_name}
          onChange={setFacilityName}
        />
      </SimpleGrid>
      <SimpleGrid cols={2} className={classes.mwd}>
        <TextInput
          className={classes.myfont}
          label="Guardian Name*"
          size="md"
          icon={<img src="/assets/images/location.png" alt="address" />}
          placeholder="Ex: Wife Newman"
          sx={{ marginTop: 20 }}
          value={guardian_name}
          onChange={(e) => setGuardianName(e.target.value)}
        />
        <TextInput
          className={classes.myfont}
          label="Guardian Phone*"
          size="md"
          icon={<img src="/assets/images/location.png" alt="address" />}
          sx={{ marginTop: 20 }}
          placeholder="+1-245-786-2436"
          value={guardian_phone}
          onChange={(e) => setGuardianPhone(e.target.value)}
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
