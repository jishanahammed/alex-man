import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(3),
  },
  title: {
    marginTop: 30,
  },
}));

const Success = () => {
  const classes = useStyles();
  return (
    <Box className="success-box">
      <Typography variant="h2" align="center">
        Thank you!
      </Typography>
      <Typography className="success-text" align="center">
        <p>You will get an email with further instructions</p>
      </Typography>
    </Box>
  );
};

export default Success;
