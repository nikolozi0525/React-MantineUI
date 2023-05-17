/* eslint-disable jsx-a11y/alt-text */

import {
  Button,
  Card,
  Center,
  Checkbox,
  Group,
  Text,
  createStyles,
  rem,
} from "@mantine/core";

const PriceCard = (props) => {
  const { src, staff, patient, daily } = props;
  const useStyles = createStyles((theme) => ({
    container: {
      width: "100%",
      background: props.theme === "black" ? "black" : "white",
    },
    startBtn: {
      fontSize: rem(16),
      marginTop: 20,
      marginBottom: 10,
    },
    typedesc: {
      fontSize: rem(20),
      color: props.theme === "black" ? "white" : "black",
    },
    type: {
      marginBottom: 10,
    },
    p10: {
      marginTop: 10,
      marginBottom: 10,
      opacity: "90%",
      color: props.theme === "black" ? "white" : "#979797",
      fontSize: rem(18),
    },
    price: {
      fontSize: rem(36),
      fontWeight: 600,
      color: props.theme === "black" ? "white" : "black",
    },
    checkgroup: {
      marginTop: 46,
    },
  }));
  const { classes } = useStyles();
  return (
    <div>
      <Card
        shadow="sm"
        radius={"md"}
        withBorder
        className={classes.container}
        padding={30}
      >
        <Group className={classes.type}>
          <img src={src} />
          <Text className={classes.typedesc}>Trial</Text>
        </Group>
        <Text className={[classes.p10]}>
          <span className={classes.price}>$0.00</span>
          <span>/14 days</span>
        </Text>
        <div className={classes.checkgroup}>
          <Group className={classes.p10}>
            <img src="assets/images/check.png" alt="" />
            <Text>{staff} Staff Members</Text>
          </Group>
          <Group className={classes.p10}>
            <img src="assets/images/check.png" alt="" />
            <Text>{patient} Patients</Text>
          </Group>
          <Group className={classes.p10}>
            <img src="assets/images/check.png" alt="" />
            <Text>{daily} Daily Updates</Text>
          </Group>
        </div>
        <Center>
          <Button color={"yellow"} className={classes.startBtn} size="md">
            Get started
          </Button>
        </Center>
      </Card>
    </div>
  );
};

export default PriceCard;
