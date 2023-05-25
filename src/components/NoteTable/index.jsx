import {
  Center,
  ScrollArea,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import NoteTableRow from "../NoteTableRow";

const temp = [
  {
    name: "Tuscan",
    note_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "12/12/1991",
    staff_name: "Wife Newman",
    description: "Today Adam made...",
    active: false,
  },
  {
    name: "John's Assisted Living",
    note_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "12/12/1991",
    staff_name: "Wife Newman",
    description: "Today Adam made...",
    active: true,
  },
  {
    name: "Tuscan",
    note_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "12/12/1991",
    staff_name: "Wife Newman",
    description: "Today Adam made...",
    active: false,
  },

  {
    name: "Tuscan",
    note_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "12/12/1991",
    staff_name: "Wife Newman",
    description: "Today Adam made...",
    active: true,
  },
  {
    name: "Tuscan",
    note_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "12/12/1991",
    staff_name: "Wife Newman",
    description: "Today Adam made...",
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

const NoteTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <NoteTableRow row={row} />);
  return (
    <ScrollArea>
      <SimpleGrid cols={7} className={classes.header}>
        <Text className={classes.cell}>Name</Text>
        <Text className={classes.cell}>Note Type</Text>
        <Text className={classes.cell}>Facility Name</Text>
        <Text className={classes.cell}>D.O.B.</Text>
        <Text className={classes.cell}>Staff Name</Text>
        <Text className={classes.cell}>Description</Text>
        <Text className={classes.cell}></Text>
      </SimpleGrid>
      <div>{rows}</div>
    </ScrollArea>
  );
};

export default NoteTable;
