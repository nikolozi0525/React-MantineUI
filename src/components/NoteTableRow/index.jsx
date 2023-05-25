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
import { IconEdit, IconTrash } from "@tabler/icons-react";

import NoteModal from "../NoteModal";
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
const NoteTableRow = ({ row }) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <SimpleGrid cols={7} className={classes.wrapper}>
      <NoteModal
        opened={opened}
        close={close}
        title={"Edit Facility"}
        data={row}
      />
      <Text className={classes.cell}>{row.name}</Text>
      <Text className={classes.cell}>{row.note_type}</Text>
      <Text className={classes.cell}>{row.facility_name}</Text>
      <Text className={classes.cell}>{row.dob}</Text>
      <Text className={classes.cell}>{row.staff_name}</Text>
      <Text className={classes.cell}>{row.description}</Text>
      <Text sx={{ margin: "auto" }}>
        <Group>
          <ActionIcon color="green" variant="light" onClick={open}>
            <IconEdit />
          </ActionIcon>
          <ActionIcon color="red" variant="light">
            <IconTrash />
          </ActionIcon>
        </Group>
      </Text>
    </SimpleGrid>
  );
};

export default NoteTableRow;
