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
  },
}));
const FacilityTableRow = ({ row }) => {
  const { classes } = useStyles();
  const [active, setActive] = useState(row.active);
  return (
    <SimpleGrid cols={5} className={classes.wrapper}>
      <Text className={classes.cell}>{row.name}</Text>
      <Text className={classes.cell}>{row.type}</Text>
      <Text className={classes.cell}>{row.location}</Text>
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
        <Group>
          <ActionIcon color="green" variant="light">
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
