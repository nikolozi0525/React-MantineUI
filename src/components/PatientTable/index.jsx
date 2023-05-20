import {
  Center,
  ScrollArea,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import PatientTableRow from "../PatientTableRow";

const temp = [
  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: false,
  },
  {
    name: "John's Assisted Living",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: true,
  },
  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: false,
  },

  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: true,
  },
  {
    name: "Tuscan",
    type: "Group-Home",
    location: "123 Tuscan ave",
    active: false,
  },
];
const useStyles = createStyles((theme) => ({
  header: {
    color: "white",
    fontFamily: "Inter",
    fontStyle: "medium",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 5,
    backgroundColor: "#232323",
    // paddingLeft: rem(50),
    paddingTop: rem(15),
    paddingBottom: rem(15),
    borderRadius: 10,
    marginTop: rem(30),
  },
  cell: {
    paddingLeft: 50,
  },
}));

const PatientTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <PatientTableRow row={row} />);
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

export default PatientTable;
