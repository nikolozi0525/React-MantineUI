import { Radio, Text, createStyles } from "@mantine/core";

import { useState } from "react";

const RadioCard = () => {
  const useStyles = createStyles((theme) => ({
    container: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#97979726",
      borderStyle: "solid",
      padding: 20,
    },
    selected: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#FFBA45",
      borderStyle: "solid",
      padding: 20,
    },
  }));
  const { classes } = useStyles();
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <Radio
      className={checked === true ? classes.container : classes.selected}
      value="automatic"
      size="md"
      color="yellow"
      checked={checked}
      onChange={(e) => {
        setChecked(e.currentTarget.checked);
        console.log(checked);
      }}
      label={
        <>
          Automatics <Text>Connect to back with plaid</Text>
        </>
      }
    />
  );
};

export default RadioCard;
