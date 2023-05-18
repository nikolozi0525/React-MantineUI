import {
  ActionIcon,
  ScrollArea,
  Table,
  createStyles,
  rem,
} from "@mantine/core";

import { IconDotsVertical } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

const data = [
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
  {
    patient: "Adam Newman",
    note: "Progress Note",
    facility: "J Group Home",
    date: "12/04/2023",
    staff: "Wife Newman",
  },
];

export function DashTable() {
  const data = [
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
    {
      patient: "Adam Newman",
      note: "Progress Note",
      facility: "J Group Home",
      date: "12/04/2023",
      staff: "Wife Newman",
    },
  ];
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.patient}</td>
      <td>{row.note}</td>
      <td>{row.facility}</td>
      <td>{row.date}</td>
      <td>{row.staff}</td>
      <td>
        <ActionIcon>
          <IconDotsVertical />
        </ActionIcon>
      </td>
    </tr>
  ));

  return (
    <ScrollArea
      h={476}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table
        miw={700}
        sx={{ fontFamily: "Inter", color: "#A8A8A8" }}
        fontSize={"lg"}
        verticalSpacing={"md"}
      >
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>Patient Name</th>
            <th>Note Type</th>
            <th>Facility</th>
            <th>Date</th>
            <th>Staff Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
