import { Box, Button, Group, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    borderColor: "#97979726",
    borderWidth: 1,
    borderRadius: 14,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column",
  },
  wrapper_select: {
    background: "#232323",
  },
  plantype: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 500,
    color: "#232323",
  },
  price: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "#232323",
    fontWeight: 600,
  },
  unit: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "#979797",
  },
  period: {
    fontFamily: "Inter",
    fontSize: 18,
    color: "#979797",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
  },
  pricetag: {
    marginLeft: "auto",
  },
  desc: {
    fontFamily: "Inter",
    fontSize: 16,
    color: "#979797",
  },
  descbox: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  btnbox: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  btn: {
    width: 150,
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 500,
    marginLeft: "auto",
  },
  billing: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "#979797",
  },
  cycle: {
    fontFamily: "Inter",
    fontSize: 16,
    color: "white",
  },
  selectedtype: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: 500,
    color: "white",
  },
  selectedPrice: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "white",
    fontWeight: 600,
  },
}));
const PlanCard = ({ title, price, desc, billing, btn }) => {
  const { classes, cx } = useStyles();
  return (
    <Box
      className={
        billing ? cx(classes.wrapper, classes.wrapper_select) : classes.wrapper
      }
    >
      <Box className={classes.title}>
        <Group>
          <img src="/assets/images/trial.png" alt="" />
          <Text className={billing ? classes.selectedtype : classes.plantype}>
            {title}
          </Text>
        </Group>
        <Text className={classes.pricetag}>
          <span className={classes.unit}>$</span>{" "}
          <span className={billing ? classes.selectedPrice : classes.price}>
            {price}
          </span>
          <span className={classes.period}>/14days</span>
        </Text>
      </Box>
      <Box className={classes.descbox}>
        <Text className={classes.desc}>{desc}</Text>
      </Box>
      <Box className={classes.btnbox}>
        {billing ? (
          <Text>
            <span className={classes.billing}>Billing Cycle:</span>
            <span className={classes.cycle}>{billing}</span>
          </Text>
        ) : (
          ""
        )}
        <Button className={classes.btn} color="yellow" radius={8}>
          {btn}
        </Button>
      </Box>
    </Box>
  );
};

export default PlanCard;
