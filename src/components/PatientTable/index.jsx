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
    facility_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "12/5/1986",
    guardian_name: "Wife Newman",
    guardian_phone: "+1-245-786-2436",
    active: false,
  },
  {
    name: "John's Assisted Living",
    facility_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "2/8/1973",
    guardian_name: "Wife Newman",
    guardian_phone: "+1-245-786-2436",
    active: true,
  },
  {
    name: "Tuscan",
    facility_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "8/6/1986",
    guardian_name: "Wife Newman",
    guardian_phone: "+1-245-786-2436",
    active: false,
  },

  {
    name: "Tuscan",
    facility_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "7/29/1998",
    guardian_name: "Wife Newman",
    guardian_phone: "+1-245-786-2436",
    active: true,
  },
  {
    name: "Tuscan",
    facility_type: "Group-Home",
    facility_name: "123 Tuscan ave",
    dob: "6/15/1989",
    guardian_name: "Wife Newman",
    guardian_phone: "+1-245-786-2436",
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
    paddingLeft: 20,
    textAlign: "center",
  },
}));

const PatientTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <PatientTableRow row={row} />);
  return (
    <ScrollArea>
      <SimpleGrid cols={8} className={classes.header}>
        <Text className={classes.cell}>Name</Text>
        <Text className={classes.cell}>Facility Type</Text>
        <Text className={classes.cell}>Facility Name</Text>
        <Text className={classes.cell}>D.O.B</Text>
        <Text className={classes.cell}>Guardian Name</Text>
        <Text className={classes.cell}>Guardian phone</Text>
        <Text sx={{ margin: "auto" }}>Active</Text>
        <Text className={classes.cell}></Text>
      </SimpleGrid>
      <div>{rows}</div>
    </ScrollArea>
  );
};

export default PatientTable;
