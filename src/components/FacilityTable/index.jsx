import {
  Center,
  ScrollArea,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import FacilityTableRow from "../FacilityTableRow";

const useStyles = createStyles((theme) => ({
  header: {
    color: "white",
    fontFamily: "Inter",
    fontStyle: "medium",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 5,
    backgroundColor: "#232323",
    paddingTop: rem(15),
    paddingBottom: rem(15),
    borderRadius: 10,
    marginTop: rem(30),
  },
  cell: {
    paddingLeft: 50,
  },
}));

const FacilityTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = data.map((row) => <FacilityTableRow row={row} />);
  return (
    <ScrollArea>
      <SimpleGrid cols={5} className={classes.header}>
        <Text className={classes.cell}>Facility Name</Text>
        <Text className={classes.cell}>Facility Type</Text>
        <Text className={classes.cell}>Location</Text>
        <Text sx={{ margin: "auto" }}>Active</Text>
        <Text className={classes.cell}></Text>
      </SimpleGrid>
      <div>{rows}</div>
    </ScrollArea>
  );
};

export default FacilityTable;
