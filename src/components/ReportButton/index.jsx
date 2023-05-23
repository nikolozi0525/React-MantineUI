import {
  ActionIcon,
  Button,
  Group,
  Text,
  UnstyledButton,
  createStyles,
  getStylesRef,
} from "@mantine/core";

import { IconMail } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  mybutton: {
    backgroundcolor: "#FFF1DA",

    [`&:hover .${getStylesRef("btnText")}`]: {
      background: "#FFBA45",
    },
    [`&:hover .${getStylesRef("btnIcon")}`]: {
      background: "#FFBA45",
    },
  },
  btnIcon: {
    ref: getStylesRef("btnIcon"),
    background: "#FFF1DA",
    borderRadius: 5,
    borderColor: "#FFBA45",
    borderStyle: "solid",
    padding: 10,
  },
  btnText: {
    ref: getStylesRef("btnText"),
    backgroundColor: "#FFF1DA",
    borderTopColor: "#FFBA45",
    borderBottomColor: "#FFBA45",
    borderRightColor: "#FFBA45",
    borderTopStyle: "solid",
    borderRightStyle: "solid",
    borderBottomStyle: "solid",
  },
}));

const ReportButton = ({ title, onClick }) => {
  const { classes } = useStyles();
  return (
    <UnstyledButton className={classes.mybutton} onClick={onClick}>
      <Group spacing={0}>
        <IconMail
          color="black"
          stroke={1}
          className={classes.btnIcon}
          size={48}
        />
        <Text
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: 500,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            zIndex: -1,
          }}
          className={classes.btnText}
          p={7}
          ml={-3}
        >
          {title}
        </Text>
      </Group>
    </UnstyledButton>
  );
};

export default ReportButton;
