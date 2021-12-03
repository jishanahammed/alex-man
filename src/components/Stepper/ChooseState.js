import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";

// Destructuring props
const ChooseState = ({
  handleNext,
  handleChange,
  values: { SelectState },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  let isValid;
  if (SelectState === "") {
    isValid = 0;
  } else {
    isValid = 1;
  }
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  return (
    <Fragment>
      <Typography
        variant="subtitle2"
        align="center"
        style={{ margin: "10px 0" }}
        className="TypographyTitle mt-5"
      >
        <h6> Which state do you prefer to register your business in? </h6>
      </Typography>

      <Grid container spacing={2} noValidate>
        <Grid className="bg-cust" item xs={12} sm={12}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Choose State</InputLabel>
            <Select
              value={SelectState}
              onChange={handleChange}
              name="SelectState"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isValid}
          color="primary"
          onClick={isValid ? handleNext : null}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default ChooseState;
