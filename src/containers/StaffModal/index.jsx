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

import AlertModal from "../../components/AlertModal";
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
const StaffModal = ({ opened, onclose, title, save, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;

  const [name, setName] = useState(edit ? data.data.name : "");
  const [jobtitle, setJobtitle] = useState(edit ? data.data.jobtitle : "");
  const [email, setEmail] = useState(edit ? data.data.email : "");
  const onSave = () => {
    onclose();

    edit ? console.log(data.data) : save(true);
  };

  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={"lg"}
      onClose={onclose}
      shadow="md"
      overlayProps={{ blur: 3 }}
      radius={"lg"}
      zIndex={1000}
      title={
        <Group m={10}>
          <img src="/assets/images/addfac.png" alt="" />
          <Text sx={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600 }}>
            {title}
          </Text>
        </Group>
      }
      centered
    >
      <TextInput
        label="Full Name*"
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB",
          borderTopStyle: "solid",
        }}
        mr={15}
        ml={15}
        size="md"
        icon={<img src="/assets/images/home2.png" alt="home" />}
        placeholder="Ex: Marco Botton"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <TextInput
        label="Position"
        size="md"
        mr={15}
        ml={15}
        icon={<img src="/assets/images/location.png" alt="address" />}
        placeholder="Ex: Head Chief"
        sx={{ marginTop: 20 }}
        value={jobtitle}
        onChange={(e) => setJobtitle(e.target.value)}
      />
      <TextInput
        label="Email"
        size="md"
        mr={15}
        ml={15}
        icon={<img src="/assets/images/location.png" alt="address" />}
        sx={{ marginTop: 20 }}
        placeholder="Ex: peldi@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
          Save
        </Button>
      </SimpleGrid>
    </Modal>
  );
};

export default StaffModal;
