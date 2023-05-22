import { Button, Center, Modal, Text, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    textAlign: "center",
  },
  text: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 600,
  },
  done: {
    fontFamily: "Inter",
    fontSize: rem(19),
    fontWeight: 500,
    marginTop: rem(25),
    width: rem(122),
    height: rem(41),
  },
}));
const AlertModal = ({ icon, title, isopen, close }) => {
  const { classes } = useStyles();
  return (
    <Modal
      size={541}
      radius={15}
      opened={isopen}
      onClose={close}
      zIndex={1001}
      centered
      withCloseButton={false}
      className={classes.wrapper}
      padding={40}
    >
      <Center sx={{ marginBottom: 30 }}>
        <img src="/assets/images/mail.png" alt="mail" />
      </Center>
      <Text className={classes.text}>"Email invitation has been </Text>
      <Text className={classes.text}>sent"</Text>
      <Button
        color="yellow"
        className={classes.done}
        padding={11}
        onClick={close}
      >
        Done
      </Button>
    </Modal>
  );
};

export default AlertModal;
