import {
  Center,
  Container,
  Grid,
  ScrollArea,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import NoteTypeTableRow from "../NoteTypeTableRow";

const temp = [
  {
    name: "Tuscan",
    fields: [
      "*Staff name",
      "*Date",
      "*Time",
      "*Facility name",
      "*Patient name",
      "*Description",
    ],
  },
  {
    name: "John's Assisted Living",
    fields: [
      "*Staff name",
      "*Date",
      "*Time",
      "*Facility name",
      "*Patient name",
      "*Description",
    ],
  },
  {
    name: "Tuscan",
    fields: [
      "*Staff name",
      "*Date",
      "*Time",
      "*Facility name",
      "*Patient name",
      "*Description",
    ],
  },

  {
    name: "Tuscan",
    fields: [
      "*Staff name",
      "*Date",
      "*Time",
      "*Facility name",
      "*Patient name",
      "*Description",
    ],
  },
  {
    name: "Tuscan",
    fields: [
      "*Staff name",
      "*Date",
      "*Time",
      "*Facility name",
      "*Patient name",
      "*Description",
    ],
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
    paddingTop: rem(15),
    paddingBottom: rem(15),
    borderRadius: 10,
    marginTop: rem(30),
  },
  cell: {
    paddingLeft: 50,
  },
}));

const NoteTypeTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <NoteTypeTableRow row={row} />);
  return (
    <>
      <Grid className={classes.header}>
        <Grid.Col span={3} p={0}>
          <Text className={classes.cell}>Note Type</Text>
        </Grid.Col>
        <Grid.Col span={7} p={0}>
          <Center className={classes.cell}>
            <Text>Fields</Text>
          </Center>
        </Grid.Col>
        <Grid.Col span={2} p={0}>
          <Text className={classes.cell}></Text>
        </Grid.Col>
      </Grid>
      <div>{rows}</div>
    </>
  );
};

export default NoteTypeTable;
