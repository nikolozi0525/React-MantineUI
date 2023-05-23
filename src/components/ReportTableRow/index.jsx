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
import { IconEdit, IconEye, IconTrash } from "@tabler/icons-react";

import ReportModal from "../ReportModal";
import ReportViewModal from "../ReportViewModal";
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
    paddingLeft: rem(30),
    fontFamily: "Inter",
  },
}));
const ReportTableRow = ({ row }) => {
  const { classes } = useStyles();
  const [view, setView] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <SimpleGrid cols={8} className={classes.wrapper}>
      <ReportModal
        opened={opened}
        onclose={close}
        title={"Edit Report"}
        data={row}
      />
      <ReportViewModal opened={view} onclose={() => setView(false)} />
      <Text className={classes.cell}>{row.id}</Text>
      <Text className={classes.cell}>{row.title}</Text>
      <Text className={classes.cell}>{row.source}</Text>
      <Text className={classes.cell}>{row.facilityname}</Text>
      <Text className={classes.cell}>{row.startdate}</Text>
      <Text className={classes.cell}>{row.enddate}</Text>
      <Text className={classes.cell}>{row.createdby}</Text>

      <Text sx={{ margin: "auto" }}>
        <Group>
          <ActionIcon
            color="yellow"
            variant="light"
            onClick={() => {
              setView(true);
            }}
          >
            <IconEye />
          </ActionIcon>
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

export default ReportTableRow;
