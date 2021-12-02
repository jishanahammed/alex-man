import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React, { Fragment } from "react";
// Destructuring props
const CompanyName = ({
  handleNext,
  handleBack,
  handleChange,
  values: { companyName },
  formErrors,
}) => {
  let isValid;
  if (companyName === "") {
    isValid = 0;
  } else {
    isValid = 1;
  }
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            placeholder="Enter your Company Name"
            value={companyName || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.companyName}
            helperText={formErrors.companyName}
            required
          />
        </Grid>
      </Grid>

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 10 }}
        >
          Back
        </Button>
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

export default CompanyName;
