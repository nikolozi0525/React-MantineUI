import { Card, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  mycard: {
    textAlign: "center",
  },
  stock: {
    fontFamily: "Inter",
    fontSize: 42,
    fontWeight: 600,
    color: "#232323",
  },
  title: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 400,
    color: "#A8A8A8",
  },
  desc: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 400,
    color: "#A8A8A8",
  },
  total: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 600,
    color: "#232323",
  },
}));
const DashCard = (props) => {
  const { classes } = useStyles();
  const { src, stock, title, desc, total } = props;
  return (
    <Card className={classes.mycard} radius={10} shadow="sm">
      <img src="assets/images/people2.png" alt="" />
      <Text className={classes.stock}>{stock}</Text>
      <Text className={classes.title} mt={8}>
        {title}
      </Text>
      <Text className={classes.desc} mt={48.5}>
        {`${desc}:`}
        <span className={classes.total}>{total}</span>
      </Text>
    </Card>
  );
};

export default DashCard;
