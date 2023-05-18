import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  centered: {
    alignItems: "center",
    textAlign: "center",
    // margin: "auto",
  },
  title: {
    fontSize: rem(34),
    fontWeight: 700,
    fontFamily: "Inter",
    marginBottom: rem(20),
  },
  description: {
    fontSize: rem(16),
    fontWeight: 400,
    fontFamily: "Inter",
    color: "#979797",
  },
  logo: {
    marginTop: rem(80),
    marginBottom: rem(111),
  },
  type: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#97979726",
    borderStyle: "solid",
    padding: 20,
  },
  selected: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FFBA45",
    borderStyle: "solid",
    padding: 20,
  },
  myfont: {
    fontFamily: "Inter",
  },
  card: {
    width: "100%",
    marginTop: 30,
  },
  payBtn: {
    fontFamily: "Inter",
    marginTop: rem(50),
  },
  m10: {
    marginTop: rem(10),
    marginBottom: rem(10),
  },
  font1: {
    fontSize: rem(20),
    fontWeight: 500,
    fontFamily: "Inter",
  },
  font2: {
    fontSize: rem(16),
    fontWeight: 400,
    fontFamily: "Inter",
    color: "#979797",
  },
  back: {
    position: "absolute",
    top: rem(50),
    left: rem(50),
    fontSize: rem(16),
    fontFamily: "Inter",
    fontWeight: 500,
  },
}));
