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
      background: props.theme === "black" ? "#232323" : "white",
      fontFamily: "Inter",
      padding: 30,
    },
    startBtn: {
      fontSize: rem(18),
      marginTop: 20,
      marginBottom: 20,
      fontFamily: "Inter",
    },
    typedesc: {
      fontSize: rem(20),
      fontFamily: "Inter",
      color: props.theme === "black" ? "white" : "black",
    },
    type: {
      marginBottom: 10,
    },
    p10: {
      marginTop: 20,
      marginBottom: 10,
      opacity: "90%",
      color: props.theme === "black" ? "white" : "#979797",
      fontSize: rem(18),
      fontFamily: "Inter",
    },
    price: {
      fontSize: rem(36),
      fontFamily: "Inter",
      fontWeight: 600,
      color: props.theme === "black" ? "white" : "black",
    },
    checkgroup: {
      marginTop: 46,
    },
    myfont: {
      fontFamily: "Inter",
    },
  }));
  const { classes } = useStyles();
  return (
    <div>
      <Card
        shadow="sm"
        radius={"lg"}
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
            <Text className={classes.myfont}>{staff} Staff Members</Text>
          </Group>
          <Group className={classes.p10}>
            <img src="assets/images/check.png" alt="" />
            <Text className={classes.myfont}>{patient} Patients</Text>
          </Group>
          <Group className={classes.p10}>
            <img src="assets/images/check.png" alt="" />
            <Text className={classes.myfont}>{daily} Daily Updates</Text>
          </Group>
        </div>
        <Card.Section>
          <Center>
            <Button color={"yellow"} className={classes.startBtn} size="md">
              Get started
            </Button>
          </Center>
        </Card.Section>
      </Card>
    </div>
  );
};

export default PriceCard;
