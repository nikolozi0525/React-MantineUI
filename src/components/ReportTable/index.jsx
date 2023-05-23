import {
  Center,
  ScrollArea,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import ReportTableRow from "../ReportTableRow";

const temp = [
  {
    id: "1",
    title: "Newman Audit",
    source: "Progress Note",
    facilityname: "J Group Home",
    startdate: "14/02/2023",
    enddate: "17/03/2023",
    createdby: "Wife Newman",
  },
  {
    id: "2",
    title: "Newman Audit",
    source: "Progress Note",
    facilityname: "J Group Home",
    startdate: "14/02/2023",
    enddate: "17/03/2023",
    createdby: "Wife Newman",
  },
  {
    id: "3",
    title: "Newman Audit",
    source: "Progress Note",
    facilityname: "J Group Home",
    startdate: "14/02/2023",
    enddate: "17/03/2023",
    createdby: "Wife Newman",
  },
  {
    id: "4",
    title: "Newman Audit",
    source: "Progress Note",
    facilityname: "J Group Home",
    startdate: "14/02/2023",
    enddate: "17/03/2023",
    createdby: "Wife Newman",
  },
  {
    id: "5",
    title: "Newman Audit",
    source: "Progress Note",
    facilityname: "J Group Home",
    startdate: "14/02/2023",
    enddate: "17/03/2023",
    createdby: "Wife Newman",
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
    paddingLeft: 30,
  },
}));

const ReportTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <ReportTableRow row={row} />);
  return (
    <ScrollArea>
      <SimpleGrid cols={8} className={classes.header}>
        <Text className={classes.cell}>Report ID</Text>
        <Text className={classes.cell}>Report Title</Text>
        <Text className={classes.cell}>Record Source</Text>
        <Text className={classes.cell}>Facility name</Text>
        <Text className={classes.cell}>Start Date</Text>
        <Text className={classes.cell}>End Date</Text>
        <Text className={classes.cell}>Created by</Text>
        <Text className={classes.cell}></Text>
      </SimpleGrid>
      <div>{rows}</div>
    </ScrollArea>
  );
};

export default ReportTable;
