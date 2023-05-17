import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  cardcontainer: {
    width: "57%",
    margin: "auto",
  },
  centered: {
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: rem(34),
    fontWeight: 700,
    fontFamily: "Inter",
    marginBottom: rem(20),
  },
  description: {
    fontSize: rem(20),
    fontWeight: 400,
    fontFamily: "Inter",
    color: "#979797",
    marginBottom: rem(50),
  },
  logo: {
    marginTop: rem(80),
    marginBottom: rem(111),
  },
}));

export default useStyles;
