import {
  ActionIcon,
  Button,
  Group,
  Text,
  UnstyledButton,
  createStyles,
  getStylesRef,
} from "@mantine/core";

import { IconSquarePlus } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  mybutton: {
    backgroundcolor: "#FFBA45",

    [`&:hover .${getStylesRef("btnText")}`]: {
      background: "#eeaa33",
    },
    [`&:hover .${getStylesRef("btnIcon")}`]: {
      background: "#eeaa33",
    },
  },
  btnIcon: {
    ref: getStylesRef("btnIcon"),
    background: "#FFBA45",
    borderRadius: 5,
  },
  btnText: {
    ref: getStylesRef("btnText"),
    backgroundColor: "#FFBA45",
  },
}));

const AddButton = ({ title, onClick }) => {
  const { classes } = useStyles();
  return (
    <UnstyledButton className={classes.mybutton} onClick={onClick}>
      <Group spacing={0}>
        <IconSquarePlus
          color="black"
          stroke={1}
          className={classes.btnIcon}
          size={50}
        />
        <Text
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: 500,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
          className={classes.btnText}
          p={7}
          ml={0}
        >
          {title}
        </Text>
      </Group>
    </UnstyledButton>
  );
};

export default AddButton;
