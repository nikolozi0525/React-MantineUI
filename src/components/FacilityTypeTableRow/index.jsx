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

import FacilityTypeModal from "../FacilityTypeModal";
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
const FacilityTableRow = ({ row }) => {
  const { classes } = useStyles();
  const [active, setActive] = useState(row.active);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <SimpleGrid cols={2} className={classes.wrapper}>
      <FacilityTypeModal
        opened={opened}
        close={close}
        title={"Facility Type"}
        data={row}
      />
      <Text className={classes.cell}>{row.name}</Text>

      <Text sx={{ marginLeft: "auto", marginRight: 50 }}>
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

export default FacilityTableRow;
