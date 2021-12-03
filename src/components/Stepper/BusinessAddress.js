import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

// Destructuring props
const BusinessAddress = ({
  handleNext,
  handleBack,
  handleChange,
  values: { businessAddressaction },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error

  const isValid = businessAddressaction.length > 0;
  console.log('"No"', isValid);
  const Yesclick = () => {
    businessAddressaction = "Yes";
  };
  const Noclick = () => {
    businessAddressaction = "No";
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend" className="mt-4">
              <span>
                Are you interested in using the provided U.S. business address?
              </span>
            </FormLabel>
            <RadioGroup
              defaultValue="female"
              aria-label="gender"
              name="customized-radios"
            >
              <FormControlLabel
                value="Yes"
                control={<StyledRadio />}
                label="Yes"
                name="businessAddressaction"
                onClick={Yesclick}
                onChange={handleChange}
              />
              <FormControlLabel
                value="No"
                control={<StyledRadio />}
                label="No"
                name="businessAddressaction"
                onChange={handleChange}
                onClick={Noclick}
              />
            </RadioGroup>
          </FormControl>
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

export default BusinessAddress;
