import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";

// Destructuring props
const PhysicalOperatingAddress = ({
  handleNext,
  handleBack,
  handleChange,
  values: {streetAddress, countryName,city,stateProvinceinfo,zIPPostalCode,optionalinfo },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    city.length > 0 &&
    !formErrors.city &&
    countryName.length > 0 &&
    !formErrors.countryName &&
    stateProvinceinfo.length > 0 &&
    !formErrors.stateProvinceinfo &&
    zIPPostalCode.length > 0 &&
    !formErrors.zIPPostalCode ;
  
    
  return (
    <>
      <Grid container spacing={2}>

      <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Country"
            name="countryName"
            placeholder="Enter your Country"
            value={countryName || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.countryName}
            helperText={formErrors.countryName}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            value={city || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.city}
            helperText={formErrors.city}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street Address"
            name="streetAddress"
            placeholder="Enter your Street Address"
            value={streetAddress || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.streetAddress}
            helperText={formErrors.streetAddress}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="State/Province"
            name="stateProvinceinfo"
            placeholder="Enter your State/Province"
            value={stateProvinceinfo|| ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.stateProvince}
            helperText={formErrors.stateProvince}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label=" ZIP/Postal Code"
            name="zIPPostalCode"
            placeholder="Enter your ZIP/Postal Code"
            value={zIPPostalCode|| ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.zIPPostalCode}
            helperText={formErrors.zIPPostalCode}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Suite, etc.(Optional)"
            name="optionalinfo"
            placeholder="Enter your ZIP/Postal Code"
            value={optionalinfo|| ""}
            margin="normal"
            onChange={handleChange}
 
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

export default PhysicalOperatingAddress;
