import { Button, Card, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  name: {
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: 24,
    color: "white",
  },
  pos: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: 16,
    color: "#232323",
  },
  mycard: {
    background: "#FFBA45",
    textAlign: "center",
  },
}));

const UserCard = (props) => {
  const { classes } = useStyles();
  return (
    <Card className={classes.mycard} radius={10} shadow="sm">
      <img src="assets/images/avatar.png" alt="" />
      <Text className={classes.name}>Devon Lane</Text>
      <Text className={classes.pos} mt={8}>
        Founder & CEO
      </Text>
      <Button
        color="black"
        variant="default"
        mt={26}
        sx={{
          fontFamily: "Inter",
        }}
      >
        View Profile
      </Button>
    </Card>
  );
};

export default UserCard;
