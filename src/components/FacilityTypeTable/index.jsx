import {
  Center,
  ScrollArea,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import FacilityTypeTableRow from "../FacilityTypeTableRow";

const temp = [
  {
    name: "Group-Home",
  },
  {
    name: "Assisted Living",
  },
  {
    name: "Hospice Care",
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

const FacilityTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <FacilityTypeTableRow row={row} />);
  return (
    <ScrollArea>
      <SimpleGrid cols={2} className={classes.header}>
        <Text className={classes.cell}>Facility Type</Text>
        <Text className={{ marginLeft: "auto", marginRight: 50 }}></Text>
      </SimpleGrid>
      <div>{rows}</div>
    </ScrollArea>
  );
};

export default FacilityTable;
