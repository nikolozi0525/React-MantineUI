import { Box, Group, Text } from "@mantine/core";

import useStyles from "./style";

const FeatureCard = ({ icon, title, children }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.borderContainer}>
      <Box className={classes.container}>
        <Group className={classes.iconcontainer}>
          <img src={icon} alt="icon" />
          <Text className={classes.title}>{title}</Text>
        </Group>
        <Text className={classes.content}>{children}</Text>
      </Box>
    </Box>
  );
};

export default FeatureCard;
