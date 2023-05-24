import {
  ActionIcon,
  Center,
  Group,
  SimpleGrid,
  Switch,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { IconEdit, IconKey, IconTrash } from "@tabler/icons-react";

import StaffModal from "../../containers/StaffModal";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    borderWidth: 1,
    boderColor: "#F2F2F2",
    borderStyle: "solid",
    borderRadius: 12,
    width: "100%",
    paddingTop: rem(12),
    paddingBottom: rem(12),
    // paddingLeft: rem(50),
    fontSize: 16,
    fontFamily: "Inter",
    marginTop: 15,
    color: "#A8A8A8",
  },
  cell: {
    paddingLeft: rem(50),
    fontFamily: "Inter",
  },
}));
const StaffTableRow = ({ row }) => {
  const { classes } = useStyles();
  const [active, setActive] = useState(row.active);
  const [opened, { open, close }] = useDisclosure(false);
  const onDelete = () => {};
  return (
    <SimpleGrid cols={6} className={classes.wrapper}>
      <StaffModal
        opened={opened}
        onclose={close}
        title={"Edit Staff"}
        data={row}
      />
      <Text className={classes.cell}>{row.name}</Text>
      <Text className={classes.cell}>{row.jobtitle}</Text>
      <Text className={classes.cell}>{row.email}</Text>
      <Text sx={{ margin: "auto" }}>
        <Switch
          size="lg"
          color="yellow"
          checked={active}
          onChange={() => {
            setActive(!active);
          }}
        />
      </Text>
      <Text sx={{ margin: "auto" }}>
        <ActionIcon variant="light" onClick={open}>
          <IconKey />
        </ActionIcon>
      </Text>
      <Text sx={{ margin: "auto" }}>
        <Group>
          <ActionIcon color="green" variant="light" onClick={open}>
            <IconEdit />
          </ActionIcon>
          <ActionIcon color="red" variant="light" onClick={onDelete}>
            <IconTrash />
          </ActionIcon>
        </Group>
      </Text>
    </SimpleGrid>
  );
};

export default StaffTableRow;
