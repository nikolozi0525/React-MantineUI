import { createStyles, em, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  left_pane: {
    width: "50%",
    height: "100vh",
    background: "#FFBA45",
  },
  welcome: {
    position: "relative",
    top: "5.5%",
    left: "5.5%",
    maxWidth: "80%",
  },
  logo_img: {
    width: "11.57%",
    aspectRatio: 2.7,
  },
  glass_man: {
    marginTop: "9.4%",
    marginLeft: "8.95%",
    width: "59.2%",
    aspectRatio: 0.88,
  },
  credential: {
    position: "absolute",
    top: "24%",
    left: "26.09%",
    width: "19%",
    aspectRatio: "0.8693",
  },
  myform: {
    maxWidth: "70%",
    margin: "auto",
    position: "relative",
    top: "10%",
  },
  rememberbox: {
    marginTop: rem(15),
    marginBottom: rem(15),
  },
  forgot: {
    marginLeft: "auto",
    color: "#FFBA45",
    textDecoration: "underline",
    fontSize: rem(12),
  },
  signup: {
    color: "#FFBA45",
    textDecoration: "underline",
  },
  toptitle: {
    position: "relative",
    top: "5.5%",
    right: "5.5%",
    fontSize: rem(14),
    textAlign: "right",
  },
  title: {
    marginTop: rem(12),
    marginBottom: rem(12),
    fontSize: rem(32),
    fontWeight: 700,
    fontFamily: "Inter",
  },
  login_btn: {
    "@media (max-width :80em)": {
      width: "100%",
    },
    width: "50%",
  },
  login_btn_google: {
    "@media (max-width :80em)": {
      width: "100%",
    },
    width: "50%",
    marginTop: rem(20),
    color: "grey",
  },
}));

export default useStyles;
