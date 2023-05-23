import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";

import { DateInput } from "@mantine/dates";
import { useEffect } from "react";

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
}));
const fields = [];
const ReportModal = ({ opened, onclose, title, save, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const onSave = () => {
    onclose();
    // edit ? console.log(data.data) : save(true);
  };
  const added = fields.map((f) => (
    <Box
      cols={2}
      sx={{
        margin: "auto",
        marginBottom: 10,
        borderBottomColor: "#FFBA4599",
        borderBottomWidth: 2,
        borderBottomStyle: "solid",
        paddingBottom: 20,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Group>
        <Select
          label="Record Source*"
          data={["sfse", "asfsdf"]}
          size="md"
          icon={<img src="/assets/images/location.png" alt="address" />}
          placeholder="Select Date"
          sx={{ marginTop: 20 }}
        />
        <Select
          label="Fields*"
          size="md"
          data={["sfse", "asfsdf"]}
          icon={<img src="/assets/images/location.png" alt="address" />}
          sx={{ marginTop: 20 }}
          placeholder="Select Date"
        />
      </Group>
      <Group sx={{ marginTop: 42, marginLeft: 24 }}>
        <ActionIcon size={"xl"} color="red" variant="light">
          <IconTrash />
        </ActionIcon>
      </Group>
    </Box>
  ));
  const onAdd = () => {
    fields.push({ record: "", field: "" });
    // console.log(fields);
  };
  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={739}
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
      <TextInput
        label="Report Name*"
        sx={{
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: "#CBCBCB66",
          borderTopStyle: "solid",
        }}
        size="md"
        icon={<img src="/assets/images/home2.png" alt="home" />}
        placeholder="Ex: Newman Audit"
        disabled={edit ? true : false}
      />
      <SimpleGrid
        cols={2}
        sx={{ margin: "auto", marginTop: 10, marginBottom: 10 }}
      >
        <DateInput
          label="Start Date*"
          size="md"
          icon={<img src="/assets/images/location.png" alt="address" />}
          placeholder="Select Date"
          sx={{ marginTop: 20, zIndex: 2000 }}
        />
        <DateInput
          label="End Date*"
          size="md"
          icon={<img src="/assets/images/location.png" alt="address" />}
          sx={{ marginTop: 20 }}
          placeholder="Select Date"
        />
      </SimpleGrid>
      <Box
        cols={2}
        sx={{
          margin: "auto",
          marginBottom: 10,
          borderBottomColor: "#FFBA4599",
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          paddingBottom: 20,
        }}
      >
        <Group>
          <Select
            label="Record Source*"
            data={["sfse", "asfsdf"]}
            size="md"
            icon={<img src="/assets/images/location.png" alt="address" />}
            placeholder="Select Date"
            sx={{ marginTop: 20 }}
          />
          <Select
            label="Fields*"
            size="md"
            data={["sfse", "asfsdf"]}
            icon={<img src="/assets/images/location.png" alt="address" />}
            sx={{ marginTop: 20 }}
            placeholder="Select Date"
          />
        </Group>
      </Box>
      <Box
        cols={2}
        sx={{
          margin: "auto",
          marginBottom: 10,
          borderBottomColor: "#FFBA4599",
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          paddingBottom: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Group>
          <Select
            label="Record Source*"
            data={["sfse", "asfsdf"]}
            size="md"
            icon={<img src="/assets/images/location.png" alt="address" />}
            placeholder="Select Date"
            sx={{ marginTop: 20 }}
          />
          <Select
            label="Fields*"
            size="md"
            data={["sfse", "asfsdf"]}
            icon={<img src="/assets/images/location.png" alt="address" />}
            sx={{ marginTop: 20 }}
            placeholder="Select Date"
          />
        </Group>
        <Group sx={{ marginTop: 42, marginLeft: 24 }}>
          <ActionIcon size={"xl"} color="red" variant="light">
            <IconTrash />
          </ActionIcon>
        </Group>
      </Box>
      {fields.map((f) => (
        <Box
          cols={2}
          sx={{
            margin: "auto",
            marginBottom: 10,
            borderBottomColor: "#FFBA4599",
            borderBottomWidth: 2,
            borderBottomStyle: "solid",
            paddingBottom: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Group>
            <Select
              label="Record Source*"
              data={["sfse", "asfsdf"]}
              size="md"
              icon={<img src="/assets/images/location.png" alt="address" />}
              placeholder="Select Date"
              sx={{ marginTop: 20 }}
            />
            <Select
              label="Fields*"
              size="md"
              data={["sfse", "asfsdf"]}
              icon={<img src="/assets/images/location.png" alt="address" />}
              sx={{ marginTop: 20 }}
              placeholder="Select Date"
            />
          </Group>
          <Group sx={{ marginTop: 42, marginLeft: 24 }}>
            <ActionIcon size={"xl"} color="red" variant="light">
              <IconTrash />
            </ActionIcon>
          </Group>
        </Box>
      ))}
      <Box
        cols={2}
        sx={{
          margin: "auto",
          marginBottom: 10,
          borderBottomColor: "#FFBA4599",
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          paddingBottom: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Group>
          <Select
            label="Record Source*"
            data={["sfse", "asfsdf"]}
            size="md"
            icon={<img src="/assets/images/location.png" alt="address" />}
            placeholder="Select Date"
            sx={{ marginTop: 20 }}
          />
          <Select
            label="Fields*"
            size="md"
            data={["sfse", "asfsdf"]}
            icon={<img src="/assets/images/location.png" alt="address" />}
            sx={{ marginTop: 20 }}
            placeholder="Select Date"
          />
        </Group>
        <Group sx={{ marginTop: 42, marginLeft: 24 }}>
          <ActionIcon size={"xl"} color="red" variant="light">
            <IconTrash />
          </ActionIcon>
          <ActionIcon
            size={"xl"}
            color="yellow"
            variant="light"
            onClick={onAdd}
          >
            <IconPlus />
          </ActionIcon>
        </Group>
      </Box>
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

export default ReportModal;
