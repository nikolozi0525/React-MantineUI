import { Card, Container, Grid, Group, SimpleGrid } from "@mantine/core";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Facility from "./Facility";
import FacilityType from "./FacilityType";
import Nav from "../../components/Navbar";
import Note from "./Note";
import NoteType from "./NoteType";
import Patient from "./Patient";
import Setting from "./Setting";
import Staff from "./Staff";
import useStyles from "./style";

const Home = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container className={classes.wrapper} fluid p={0}>
        <Nav />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="facility" element={<Facility />}></Route>
          <Route path="staff" element={<Staff />} />
          <Route path="facilitytype" element={<FacilityType />} />
          <Route path="report" element={<Dashboard />} />
          <Route path="patient" element={<Patient />} />
          <Route path="note" element={<Note />} />
          <Route path="notetype" element={<NoteType />} />
          <Route path="settings" element={<Setting />} />
        </Routes>
      </Container>
    </>
  );
};
export default Home;
