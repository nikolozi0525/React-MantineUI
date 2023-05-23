import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Modal,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";

import AlertModal from "../AlertModal";
import { IconFilter } from "@tabler/icons-react";
import ReportButton from "../ReportButton";
import ReportViewTable from "../ReportViewTable";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },
  content: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  btn: {
    marginLeft: "auto",
    width: 122,
  },
  mymodal: {
    // width: "10vw",
    marginLeft: "-5vw",
  },
  mwd: {
    width: "100%",
  },
  filters: {
    width: "100%",
  },
  filter: {
    borderRadius: 10,
    borderColor: "#FFBA4599",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 12,
    marginTop: 15,
  },
  title: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 500,
    color: "#232323",
  },
  name: {
    fontFamily: "Inter",
    fontSize: 22,
    fontWeight: 500,
    color: "#FFBA45",
  },
}));
const model = [
  {
    patient: "wfefE",
    facility: "affaefae@gmail.com",
    incident: "sfegsge",
    date: "12/01/2023",
    time: "10:00am",
    staff: "afefae",
    description: "sdfs...",
  },
  {
    patient: "sfesef",
    facility: "sdfsdf@gmail.com",
    incident: "hghfg",
    date: "12/01/2023",
    time: "10:00am",
    staff: "afefae",
    description: "fefe...",
  },
  {
    patient: "fyy",
    facility: "rgere@gmail.com",
    incident: "dhrt",
    date: "12/01/2023",
    time: "10:00am",
    staff: "afefae",
    description: "wef...",
  },
  {
    patient: "sgrg",
    facility: "dfgr@gmail.com",
    incident: "wfewe",
    date: "12/01/2023",
    time: "10:00am",
    staff: "afefae",
    description: "greg...",
  },
  {
    patient: "uiku",
    facility: "thyh@gmail.com",
    incident: "regs",
    date: "12/01/2023",
    time: "10:00am",
    staff: "afefae",
    description: "erhreh...",
  },
];
const ReportViewModal = ({ opened, onclose, title, save, ...data }) => {
  const { classes } = useStyles();
  const edit = data.data ? true : false;
  const onSave = () => {
    onclose();

    edit ? console.log(data.data) : save(true);
  };

  return (
    <Modal
      className={classes.mymodal}
      opened={opened}
      size={1760}
      onClose={onclose}
      shadow="md"
      overlayProps={{ blur: 3 }}
      zIndex={1000}
      title={
        <Group>
          <img src="/assets/images/addfac.png" alt="" />
          <Text sx={{ fontFamily: "Inter", fontSize: 22, fontWeight: 600 }}>
            {title}
          </Text>
        </Group>
      }
      centered
    >
      <Container
        fluid
        sx={{
          width: "100%",
          borderTopColor: "#EDEDED",
          borderTopStyle: "solid",
          borderTopWidth: 2,
        }}
        m={0}
        p={0}
        pt={10}
      >
        <Grid>
          <Grid.Col span={3}>
            <Text sx={{ marginLeft: 20 }}>
              <span className={classes.title}>ReportName:</span>{" "}
              <span className={classes.name}>Newman Audit</span>
            </Text>
            <Card shadow="sm" p={15} sx={{ height: 738, marginTop: 41 }}>
              <Card.Section>
                <Group
                  sx={{
                    marginTop: 15,
                    marginLeft: 15,
                    marginRight: 15,
                    borderBottomColor: "#CBCBCB66",
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    paddingBottom: 15,
                  }}
                >
                  <ActionIcon color="yellow" variant="light">
                    <IconFilter color="#FFBA45" />
                  </ActionIcon>
                  <Text
                    sx={{ fontFamily: "Inter", fontSize: 22, fontWeight: 500 }}
                  >
                    Filters
                  </Text>
                  <Badge color="yellow" size="lg">
                    2
                  </Badge>
                  <Button
                    color="yellow"
                    radius={8}
                    className={classes.btn}
                    variant="light"
                  >
                    Clear
                  </Button>
                </Group>
              </Card.Section>
              <Container className={classes.filters} p={0}>
                <Grid columns={14}>
                  <Grid.Col span={12}>
                    <Box className={classes.filter}>
                      <Select
                        label={"Field"}
                        placeholder="Select Field Type"
                        data={[]}
                        size="md"
                      />
                      <Select
                        label={"Field Value"}
                        placeholder="Select Field Type"
                        data={[]}
                        size="md"
                      />
                    </Box>
                    <Box className={classes.filter}>
                      <Select
                        label={"Field"}
                        placeholder="Select Field Type"
                        data={[]}
                        size="md"
                      />
                      <Select
                        label={"Field Value"}
                        placeholder="Select Field Type"
                        data={[]}
                        size="md"
                      />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={2} sx={{ display: "flex" }}>
                    <ActionIcon
                      color="yellow"
                      variant="filled"
                      sx={{
                        position: "relative",
                        marginTop: "auto",
                        // bottom: 15,
                      }}
                    >
                      <img src="/assets/images/filter-add.png" alt="" />
                    </ActionIcon>
                  </Grid.Col>
                </Grid>
              </Container>
              <Center>
                <Button
                  color="yellow"
                  sx={{
                    width: 122,
                    position: "absolute",
                    bottom: 15,
                    fontFamily: "Inter",
                    fontSize: 16,
                  }}
                >
                  Save
                </Button>
              </Center>
            </Card>
          </Grid.Col>
          <Grid.Col span={"auto"}>
            <Container sx={{ width: "100%" }} fluid p={0}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text sx={{ fontFamily: "Inter", fontSize: 20, marginTop: 25 }}>
                  Total no. of Records: 3
                </Text>
                <Group sx={{ marginLeft: "auto", marginRight: 30 }}>
                  <ReportButton title={"Email Report"} />
                  <ActionIcon>
                    <img src="/assets/images/xls.png" alt="" />
                  </ActionIcon>
                  <ActionIcon ml={15}>
                    <img src="/assets/images/pdf.png" alt="" />
                  </ActionIcon>
                </Group>
              </Box>
              <ReportViewTable data={model} />
            </Container>
          </Grid.Col>
        </Grid>
      </Container>
    </Modal>
  );
};

export default ReportViewModal;
