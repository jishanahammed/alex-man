import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
// Destructuring props
const amountofShares = ({
  handleNext,
  handleBack,
  handleChange,
  values: { amount, parValue },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    amount.length > 0 &&
    !formErrors.amount &&
    parValue.length > 0 &&
    !formErrors.parValue;

  return (
    <>
      <Typography
        variant="subtitle2"
        align="center"
        style={{ margin: "10px 0" }}
        className="TypographyTitle mt-5 mb-4"
      >
        <h6>The maximum number of shares a company is allowed to issue.</h6>
        <p className="text-light"> Authorize Default Number of Shares</p>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Amount"
            name="amount"
            type="number"
            placeholder="Enter your Country"
            value={amount || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.amount}
            helperText={formErrors.amount}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Par Value"
            name="parValue"
            placeholder="Enter your Par Value"
            value={parValue || ""}
            margin="normal"
            type="number"
            onChange={handleChange}
            error={!!formErrors.parValue}
            helperText={formErrors.parValue}
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
    </>
  );
};

export default amountofShares;
