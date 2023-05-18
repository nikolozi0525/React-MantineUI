import { ActionIcon, Container, Text, TextInput } from "@mantine/core";
import { IconBell, IconSearch, IconSettings } from "@tabler/icons-react";

import useStyles from "./style";

const Topbar = (props) => {
  const { classes } = useStyles();
  const { title } = props;
  return (
    <Container className={classes.wrapper} fluid p={0}>
      <Text className={classes.myfont}>{title}</Text>
      <ActionIcon
        variant="light"
        size={52}
        className={classes.float_right}
        mx={5}
      >
        <IconSettings size={40} color="#232323" stroke={1} />
      </ActionIcon>
      <ActionIcon
        variant="light"
        size={52}
        className={classes.float_right}
        mx={5}
      >
        <IconBell size={40} color="#232323" stroke={1} />
      </ActionIcon>
      <TextInput
        placeholder="Search something..."
        sx={{ fontFamily: "Inter", width: 514 }}
        icon={<IconSearch />}
        size="lg"
        radius={12}
        className={classes.float_right}
      />
    </Container>
  );
};

export default Topbar;
