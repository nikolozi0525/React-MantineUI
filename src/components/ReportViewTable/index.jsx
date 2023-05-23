import {
  Box,
  Center,
  Grid,
  Group,
  ScrollArea,
  SimpleGrid,
  Table,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSelector,
} from "@tabler/icons-react";

import { keys } from "@mantine/utils";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
  },
  header: {
    color: "white",
    fontFamily: "Inter",
    fontStyle: "medium",
    fontSize: 20,
    fontWeight: 500,
    backgroundColor: "#232323",
    // paddingLeft: rem(50),
    paddingTop: rem(15),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: rem(30),
  },
  cell: {
    borderWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "#EDEDED",
    borderRightStyle: "solid",
    borderRightColor: "#EDEDED",
    fontFamily: "Inter",
    fontSize: 16,
    paddingLeft: 17,
    paddingTop: 20,
    paddingBottom: 20,
  },
  control: {
    // width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    color: "white",
    "&:hover": {},
  },

  icon: {
    width: rem(21),
    height: rem(21),
    borderRadius: rem(21),
  },
}));

function Th({ children, reversed, sorted, onSort }) {
  const { classes } = useStyles();
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <UnstyledButton onClick={onSort} className={classes.control}>
      <Group position="apart">
        <Text sx={{ fontFamily: "Inter", fontSize: 20, fontWeight: 500 }}>
          {children}
        </Text>
        <Center className={classes.icon}>
          <Icon size="0.9rem" stroke={1.5} />
        </Center>
      </Group>
    </UnstyledButton>
  );
}

function filterData(data, search) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(data, payload) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const ReportViewTable = ({ data }) => {
  const { classes } = useStyles();
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const rows = sortedData.map((row) => (
    <Grid columns={100} key={row.patient} gutter={0}>
      <Grid.Col span={16}>
        <Text className={classes.cell}>{row.patient}</Text>
      </Grid.Col>
      <Grid.Col span={16}>
        <Text className={classes.cell}>{row.facility}</Text>
      </Grid.Col>
      <Grid.Col span={16}>
        <Text className={classes.cell}>{row.incident}</Text>
      </Grid.Col>
      <Grid.Col span={10}>
        <Text className={classes.cell}>{row.date}</Text>
      </Grid.Col>
      <Grid.Col span={10}>
        <Text className={classes.cell}>{row.time}</Text>
      </Grid.Col>
      <Grid.Col span={16}>
        <Text className={classes.cell}>{row.staff}</Text>
      </Grid.Col>
      <Grid.Col span={16}>
        <Text className={classes.cell}>{row.description}</Text>
      </Grid.Col>
    </Grid>
  ));

  return (
    <ScrollArea>
      <Grid columns={100} className={classes.header} gutter={0}>
        <Grid.Col span={16}>
          <Th
            sorted={sortBy === "patient"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("patient")}
          >
            Patient Name
          </Th>
        </Grid.Col>

        <Grid.Col span={16}>
          <Th
            sorted={sortBy === "facility"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("facility")}
          >
            Facility
          </Th>
        </Grid.Col>
        <Grid.Col span={16}>
          <Th
            sorted={sortBy === "incident"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("incident")}
          >
            Incident
          </Th>
        </Grid.Col>
        <Grid.Col span={10}>
          <Th
            sorted={sortBy === "date"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("date")}
          >
            Date
          </Th>
        </Grid.Col>
        <Grid.Col span={10}>
          <Th
            sorted={sortBy === "time"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("time")}
          >
            Time
          </Th>
        </Grid.Col>
        <Grid.Col span={16}>
          <Th
            sorted={sortBy === "staff"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("staff")}
          >
            Staff
          </Th>
        </Grid.Col>
        <Grid.Col span={16}>
          <Th
            sorted={sortBy === "description"}
            reversed={reverseSortDirection}
            onSort={() => setSorting("description")}
          >
            Description
          </Th>
        </Grid.Col>
      </Grid>
      <Box
        sx={{
          borderBottomStyle: "solid",
          borderBottomColor: "#EDEDED",
          borderLeftStyle: "solid",
          borderLeftColor: "#EDEDED",
          borderWidth: 1,
        }}
      >
        {rows.length > 0 ? (
          rows
        ) : (
          <tr>
            <td colSpan={Object.keys(data[0]).length}>
              <Text weight={500} align="center">
                Nothing found
              </Text>
            </td>
          </tr>
        )}
      </Box>
    </ScrollArea>
  );
};

export default ReportViewTable;
