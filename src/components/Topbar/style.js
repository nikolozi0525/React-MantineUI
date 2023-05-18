import { createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  myfont: {
    fontFamily: "Inter",
    fontSize: rem(36),
    fontWeight: 600,
    marginLeft: 10,
    float: "left",
  },
  wrapper: {
    // display: "flex",
    marginTop: 54,
    width: "100%",
  },
  float_right: {
    float: "right",
  },
}));
export default useStyles;
