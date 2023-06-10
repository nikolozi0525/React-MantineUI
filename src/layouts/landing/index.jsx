import {
  ActionIcon,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import FeatureCard from "../../components/FeatureCard";
import Footer from "../footer";
import Header from "../header";
import PriceCard from "../../components/PriceCard";

const useStyles = createStyles((theme) => ({
  text1: {
    fontFamily: "Hind",
    fontSize: rem(80),
    fontWeight: 700,
    width: rem(1103),
    marginLeft: 100,
    marginTop: 137,
  },
  yellow: {
    color: "#FFBA45",
  },
  dashboard: {
    position: "absolute",
    top: rem(435),
    left: rem(834),
  },
  text2: {
    fontFamily: "Inter",
    fontSize: rem(20),
    fontWeight: 400,
    color: "#A8A8A8",
    width: rem(648),
    marginTop: 23,
    marginLeft: 100,
  },
  text3: {
    fontFamily: "Inter",
    fontSize: rem(22),
    color: "#979797",
    marginTop: rem(26),
    marginBottom: rem(4),
  },
  btn: {
    width: rem(203),
    marginTop: 50,
    marginLeft: 100,
    fontFamily: "Inter",
    fontSize: 20,
    height: rem(44),
  },
  share: {
    marginTop: rem(285),
    marginLeft: rem(100),
    marginBottom: rem(76),
    display: "flex",
    flexDirection: "row",
  },
  container1: {
    backgroundColor: "#FAFAFA",
  },
  container2: {
    display: "flex",
  },
  container3: {
    backgroundColor: "#232323",
  },
  logocontainer: {
    backgroundColor: "#FAFAFA",
    height: rem(280),
  },
  packagetitle: {
    display: "flex",
    flexDirection: "row",
  },
  clients: {
    marginTop: rem(80),
    marginLeft: rem(220),
    marginBottom: rem(100),
  },
  review: {
    width: rem(658),
    fontFamily: "Inter",
    fontSize: rem(20),
    color: "#979797",
    fontWeight: 500,
    marginLeft: 100,
    marginTop: 15,
  },
  clientName: {
    color: "white",
    fontSize: rem(24),
    fontWeight: 500,
    fontFamily: "Inter",
  },
}));

const logos = [
  { url: "/assets/images/facebook.png" },
  { url: "/assets/images/twitter.png" },
  { url: "/assets/images/instagram.png" },
  { url: "/assets/images/logo.png" },
  { url: "/assets/images/logo2.png" },
  { url: "/assets/images/logo3.png" },
  { url: "/assets/images/facebook.png" },
  { url: "/assets/images/facebook.png" },
  { url: "/assets/images/facebook.png" },
];
const features = [
  {
    title: "Generate Report",
    icon: "/assets/images/feature_report.png",
    content:
      "Generate Report typically refers to ther process of                  automatically creating a document or summary based on a set of data or information. This can be done using various software tools that are specially...",
  },
  {
    title: "Add Note",
    icon: "/assets/images/feature_note.png",
    content:
      "Generate Report typically refers to ther process of                  automatically creating a document or summary based on a set of data or information. This can be done using various software tools that are specially...",
  },
  {
    title: "Staff",
    icon: "/assets/images/feature_staff.png",
    content:
      "Generate Report typically refers to ther process of                  automatically creating a document or summary based on a set of data or information. This can be done using various software tools that are specially...",
  },
  {
    title: "Patient",
    icon: "/assets/images/feature_patient.png",
    content:
      "Generate Report typically refers to ther process of                  automatically creating a document or summary based on a set of data or information. This can be done using various software tools that are specially...",
  },
];
const LandingPage = () => {
  const { classes } = useStyles();
  const onStart = () => {
    alert("start!");
  };
  return (
    <Box className="landing-page">
      <Header />
      <Text className={classes.text1}>
        We offer solutins to <span className={classes.yellow}>simplify</span>{" "}
        your life
      </Text>
      <Text className={classes.text2}>
        Lorem Ipsum is simply dummy text of ther printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Button color="yellow" className={classes.btn}>
        Try for Free
      </Button>
      <Image
        src="/assets/images/dashboard.png"
        width={856}
        height={483}
        className={classes.dashboard}
      />
      <Box className={classes.share}>
        <Text
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 20,
            color: "#A8A8A8",
          }}
        >
          Share with:
        </Text>
        <ActionIcon ml={18}>
          <Image src={"/assets/images/facebook.png"} />
        </ActionIcon>
        <ActionIcon ml={18}>
          <Image src={"/assets/images/instagram.png"} />
        </ActionIcon>
        <ActionIcon ml={18}>
          <Image src={"/assets/images/twitter.png"} />
        </ActionIcon>
      </Box>
      <Box className={classes.container1}>
        <Box className={classes.container2}>
          <Box className={classes.packagetitle} mx={"auto"} mt={100}>
            <Group>
              <img
                src={"/assets/images/left.png"}
                alt=""
                width={16}
                height={32}
              />
              <Text ff={"Inter"} fw={600} fz={42}>
                Package available that is perfect for you.
              </Text>
              <img
                src={"/assets/images/right.png"}
                alt=""
                width={16}
                height={32}
              />
            </Group>
          </Box>
        </Box>
        <Box mx={"auto"} sx={{ width: "57%" }}>
          <SimpleGrid cols={3} spacing={50}>
            <PriceCard
              staff={0}
              patient={2}
              daily={5}
              title="Trial"
              src="/assets/images/trial.png"
              sx={{
                marginTop: 150,
                marginBottom: 100,
              }}
            />
            <PriceCard
              staff={4}
              patient={5}
              daily={"Unlimited"}
              theme="black"
              title="Personal"
              src="/assets/images/personal.png"
              onClick={onStart}
              sx={{
                marginTop: 80,
              }}
            />
            <PriceCard
              staff={"Unlimited"}
              patient={"Unlimited"}
              daily={"Unlimited"}
              title="Agency"
              src="/assets/images/agency.png"
              onClick={onStart}
              sx={{
                marginTop: 150,
              }}
            />
          </SimpleGrid>
        </Box>
      </Box>
      <Box className={classes.container3}>
        <Box className={classes.container2}>
          <Box className={classes.packagetitle} mx={"auto"} mt={100}>
            <Group>
              <img
                src={"/assets/images/left.png"}
                alt=""
                width={16}
                height={32}
              />
              <Text ff={"Inter"} fw={600} fz={42} color="white">
                Some reviews of my clients
              </Text>
              <img
                src={"/assets/images/right.png"}
                alt=""
                width={16}
                height={32}
              />
            </Group>
          </Box>
        </Box>
        <Box className={classes.container2}>
          <Box className={classes.clients}>
            <img src={"/assets/images/clients.png"} alt={"clients"} />
          </Box>
          <Box
            sx={{
              marginTop: 104,
              marginLeft: 132,
            }}
          >
            <img src="/assets/images/client_select.png" alt="clientslelect" />
          </Box>
          <Box sx={{ marginTop: 126, marginLeft: 79 }}>
            <img src="/assets/images/startquote.png" alt="" />
            <Text className={classes.review}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an undknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
              <Box mt={100}>
                <Text className={classes.clientName}>Robert Alert______</Text>
                <Text ff={"Inter"} fw={500} fz={22} color="#979797">
                  HR Generalist
                </Text>
              </Box>
            </Text>
            <Box ml={750} mt={-50}>
              <img src="/assets/images/endquote.png" alt="endquote" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.logocontainer}>
        <Carousel
          slideSize={"16.666666%"}
          slideGap={"xl"}
          loop
          align={"start"}
          height={280}
          withControls={false}
        >
          {logos.map((logo) => {
            return (
              <Carousel.Slide sx={{ verticalAlign: "center" }} mt={100}>
                <Box my={"auto"} sx={{ verticalAlign: "center" }}>
                  <img src={logo.url} alt="logo" />
                </Box>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Box>
      <Box className={classes.container3}>
        <Box className={classes.container2}>
          <Box className={classes.packagetitle} mx={"auto"} mt={100} mb={85}>
            <Group>
              <img
                src={"/assets/images/left.png"}
                alt=""
                width={16}
                height={32}
              />
              <Text ff={"Inter"} fw={600} fz={42} color="white">
                Feature
              </Text>
              <img
                src={"/assets/images/right.png"}
                alt=""
                width={16}
                height={32}
              />
            </Group>
          </Box>
        </Box>
        <Box>
          <SimpleGrid cols={4} spacing={20}>
            {features.map((feature) => {
              return (
                <FeatureCard icon={feature.icon} title={feature.title}>
                  {feature.content}
                </FeatureCard>
              );
            })}
          </SimpleGrid>
        </Box>
        <Box h={100}></Box>
      </Box>
      <Box sx={{ height: 100 }}></Box>
      <Container fluid sx={{ backgroundColor: "#FAFAFA" }}>
        <Grid columns={24}>
          <Grid.Col span={9}>
            <Box ml={100} mt={50}>
              <img src="/assets/images/logo2.png" alt="" />
            </Box>
            <Text className={classes.text2}>
              Lorem Ipsum is simply dummy text of ther printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Box
              sx={{ display: "flex", flexDirection: "row" }}
              ml={100}
              mt={25}
              mb={50}
            >
              <ActionIcon mr={30}>
                <img src="/assets/images/twitter2.png" alt="" />
              </ActionIcon>
              <ActionIcon mr={30}>
                <img src="/assets/images/facebook2.png" alt="" />
              </ActionIcon>
              <ActionIcon>
                <img src="/assets/images/instagram2.png" alt="" />
              </ActionIcon>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Box mt={82} ml={100}>
              <Text ff={"Inter"} fw={500} fz={26}>
                Pages
              </Text>
              <Text className={classes.text3}>Features</Text>
              <Text className={classes.text3}>Plan</Text>
              <Text className={classes.text3}>Support</Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={9}>
            <Box mt={82} ml={100}>
              <Text ff={"Inter"} fw={500} fz={26}>
                Subscribe to Our Newsletter
              </Text>
              <Text ff={"Inter"} fw={400} color="#979797">
                Research, tips and ideas on workplace happiness
              </Text>
              <Group mt={20}>
                <TextInput placeholder="Email Address" ff={"Inter"} />
                <Button color="yellow" ff={"Inter"}>
                  Subscribe
                </Button>
              </Group>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default LandingPage;
