import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, Select, Tabs, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
  },
  tooltip: {
    borderRadius: 5,
    background: "white",
    padding: 2,
  },
  label: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "#A8A8A8",
  },
  staff: {
    color: "#FFC765",
  },
  bar: {
    borderRadius: 5,
    marginBottom: 10,
  },
}));
const data = [
  {
    name: "Jan",
    staff: 4,
    patients: 5,
  },
  {
    name: "Feb",
    staff: 7,
    patients: 9,
  },
  {
    name: "Mar",
    staff: 10,
    patients: 14,
  },
  {
    name: "Apr",
    staff: 7,
    patients: 11,
  },
  {
    name: "May",
    staff: 3,
    patients: 4,
  },
  {
    name: "Jun",
    staff: 10,
    patients: 14,
  },
  {
    name: "Jul",
    staff: 7,
    patients: 10,
  },
];
const reports = [
  {
    name: "Jan",
    staff: 4,
    patients: 5,
  },
  {
    name: "Feb",
    staff: 7,
    patients: 9,
  },
  {
    name: "Mar",
    staff: 10,
    amt: 14,
  },
  {
    name: "Apr",
    staff: 7,
    amt: 11,
  },
  {
    name: "May",
    staff: 3,
    amt: 4,
  },
  {
    name: "Jun",
    staff: 10,
    amt: 14,
  },
  {
    name: "Jul",
    staff: 7,
    amt: 10,
  },
];
const MyBar = () => {};
const MyTooltip = ({ payload, label, active }) => {
  const { classes } = useStyles();
  if (active) {
    return (
      <div className={classes.tooltip}>
        <p className={classes.label}>
          {"Staff :"}
          <span className={classes.staff}>{payload[0].value}</span>{" "}
        </p>
        <p className={classes.label}>{`Patients : ${payload[1].value}`}</p>
      </div>
    );
  }
};
const DashCharts = (props) => {
  const { classes } = useStyles();
  return (
    <Card shadow="md" mt={50}>
      <Tabs
        defaultValue={"Attendance"}
        sx={{ fontFamily: "Inter", fontSize: 20 }}
      >
        <Tabs.List sx={{ width: 200, display: "flex", flexDirection: "row" }}>
          <Tabs.Tab
            value="Attendance"
            sx={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600 }}
          >
            Attendance
          </Tabs.Tab>
          <Tabs.Tab
            value="Reports"
            sx={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600 }}
          >
            {" "}
            Reports
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Attendance">
          <BarChart
            width={550}
            height={440}
            data={data}
            barCategoryGap={15}
            barGap={3}
          >
            <XAxis dataKey="name" width={20} />
            <YAxis tickCount={10} />
            <Tooltip content={<MyTooltip />} />
            <Legend />
            <Bar dataKey="staff" fill="#FFC765" className={classes.bar} />
            <Bar dataKey="patients" fill="#232323" className={classes.bar} />
          </BarChart>
        </Tabs.Panel>
        <Tabs.Panel value="Reports" mih={300}>
          <Select
            placeholder="Pick one"
            data={[
              { value: "Month", label: "Month" },
              { value: "Week", label: "Week" },
              { value: "Day", label: "Day" },
            ]}
          />
          <AreaChart
            width={550}
            height={410}
            data={reports}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFBA4526" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFBA4500" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend iconType="square" />
            <CartesianGrid strokeDasharray="3 3 " vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="staff"
              stroke="#FFC765"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </Tabs.Panel>
      </Tabs>
    </Card>
  );
};

export default DashCharts;
