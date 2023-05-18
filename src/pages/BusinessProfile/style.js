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
    marginTop: "13.24%",
    marginLeft: "8.95%",
    width: "38.43%",
    aspectRatio: 0.6296,
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
    marginTop: rem(30),
    marginBottom: rem(15),
  },
  forgot: {
    marginLeft: "auto",
    color: "#FFBA45",
    textDecoration: "underline",
  },
  signup: {
    position: "absoulte",
    top: rem(60),
    right: rem(60),
    color: "#FFBA45",
    textDecoration: "underline",
    fontFamily: "Inter",
    fontSize: rem(20),
  },
  toptitle: {
    position: "absolute",
    top: "5.5%",
    right: rem(60),
    fontSize: rem(14),
    textAlign: "right",
    fontFamily: "Inter",
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
    marginTop: rem(20),
    width: rem(296),
    height: rem(50),
    fontSize: rem(22),
  },
  login_btn_google: {
    "@media (max-width :80em)": {
      width: "100%",
    },
    width: "50%",
    marginTop: rem(20),
    color: "grey",
  },
  inputs: {
    marginTop: rem(10),
    marginBottom: rem(10),
  },
  myfont: {
    fontFamily: "Inter",
  },
}));

export default useStyles;
