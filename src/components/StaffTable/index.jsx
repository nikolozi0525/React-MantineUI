import {
  Center,
  ScrollArea,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

import StaffTableRow from "../StaffTableRow";

const temp = [
  {
    name: "Giacomo Guilizzoni",
    jobtitle: "Founder & CEO",
    email: "peldi@gmail.com",
    active: false,
  },
  {
    name: "Giacomo Guilizzoni",
    jobtitle: "Founder & CEO",
    email: "peldi@gmail.com",
    active: false,
  },
  {
    name: "Giacomo Guilizzoni",
    jobtitle: "Founder & CEO",
    email: "peldi@gmail.com",
    active: false,
  },
  {
    name: "Giacomo Guilizzoni",
    jobtitle: "Founder & CEO",
    email: "peldi@gmail.com",
    active: false,
  },
  {
    name: "Giacomo Guilizzoni",
    jobtitle: "Founder & CEO",
    email: "peldi@gmail.com",
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

const StaffTable = ({ data }) => {
  const { classes } = useStyles();
  const rows = temp.map((row) => <StaffTableRow row={row} />);
  return (
    <ScrollArea>
      <SimpleGrid cols={6} className={classes.header}>
        <Text className={classes.cell}>Name</Text>
        <Text className={classes.cell}>Job Title</Text>
        <Text className={classes.cell}>Email Address</Text>
        <Text sx={{ margin: "auto" }}>Active</Text>
        <Text sx={{ margin: "auto" }}>Reset Password</Text>
        <Text className={classes.cell}></Text>
      </SimpleGrid>
      <div>{rows}</div>
    </ScrollArea>
  );
};

export default StaffTable;
