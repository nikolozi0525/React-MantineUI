import {
  ActionIcon,
  Center,
  Grid,
  Group,
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
    width: "100%",

    fontSize: 16,
    fontFamily: "Inter",
    color: "#232323",
  },
  cell: {
    fontFamily: "Inter",
  },
  type: {
    borderWidth: 1,
    boderColor: "#232323",
    borderStyle: "solid",
    borderRadius: 8,
    width: "12.5%",
  },
  rest: {
    borderWidth: 1,
    boderColor: "#232323",
    borderStyle: "solid",
    borderRadius: 8,
  },
  field: {
    borderWidth: 1,
    boderColor: "#232323",
    borderStyle: "solid",
    borderRadius: 8,
  },
}));
const NoteTypeTableRow = ({ row }) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const fields = row.fields.map((field) => (
    <Text className={classes.field} p={5}>
      {field}
    </Text>
  ));
  return (
    <Grid mt={20}>
      <NoteModal
        opened={opened}
        close={close}
        title={"Edit Note Type"}
        data={row}
      />
      <Center className={classes.type} mr={"3%"}>
        {row.name}
      </Center>
      <Grid.Col span={10} className={classes.rest}>
        <Grid>
          <Grid.Col span={11} className={classes.cell} p={5}>
            <Group>{fields}</Group>
          </Grid.Col>
          <Grid.Col span={1} sx={{ margin: "auto" }} p={0}>
            <Text>
              <Group>
                <ActionIcon color="green" variant="light" onClick={open}>
                  <IconEdit />
                </ActionIcon>
                <ActionIcon color="red" variant="light">
                  <IconTrash />
                </ActionIcon>
              </Group>
            </Text>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default NoteTypeTableRow;
