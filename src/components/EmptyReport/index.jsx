import { Center, Text, createStyles } from "@mantine/core";

const EmptyReport = () => {
  return (
    <>
      <Center sx={{ marginTop: 100 }}>
        <img src="/assets/images/notfound/png" alt="" />
      </Center>
      <Text>You don't have any type of Reports, click on "Add New Report"</Text>
    </>
  );
};

export default EmptyReport;
