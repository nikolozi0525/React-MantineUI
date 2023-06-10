import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    padding: "0.5%",
    background: theme.fn.linearGradient(90, "#454545", "#232323"),
    width: "99%",
    height: "99%",
    borderRadius: rem(20),
  },
  borderContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    width: rem(400),
    height: rem(369),
    borderRadius: rem(22),
    padding: rem(2),
    background: theme.fn.linearGradient(90, "#FFBA4596", "#FFBA451A"),
  },
  content: {
    fontFamily: "Inter",
    fontSize: rem(20),
    fontWeight: 500,
    color: "#9F9F9F",
    marginTop: rem(35),
    width: rem(346),
    marginLeft: rem(27),
  },
  title: {
    fontFamily: "Inter",
    fontSize: rem(30),
    fontWeight: 500,
    color: "white",
    marginLeft: rem(16),
  },
  iconcontainer: {
    marginTop: rem(30),
    marginLeft: rem(30),
  },
}));

export default useStyles;
