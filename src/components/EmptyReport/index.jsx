import { Center, Text, createStyles } from "@mantine/core";

const EmptyReport = () => {
  return (
    <>
      <Center sx={{ marginTop: 100 }}>
        <img src="/assets/images/notfound.png" alt="" />
      </Center>
      <Center sx={{ marginTop: 50 }}>
        <Text
          sx={{
            fontFamily: "Inter",
            fontSize: 22,
            fontWeight: 400,
            color: "#A8A8A8",
          }}
        >
          You don't have any type of Reports, click on "Add New Report"
        </Text>
      </Center>
    </>
  );
};

export default EmptyReport;
