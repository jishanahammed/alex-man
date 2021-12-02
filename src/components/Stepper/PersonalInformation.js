import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import React, { Fragment } from "react";



// Destructuring props
const PersonalInformation = ({
  handleNext,
  handleBack,
  handleChange,
  values: {
    firstName,
    middleName,
    lastName,
    countryofResidency,
    livein,
    phone,
    email,
  },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    email.length > 0 &&
    !formErrors.email &&
    phone.length > 0 &&
    !formErrors.phone &&
    countryofResidency.length > 0 &&
    !formErrors.countryofResidency;

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            margin="normal"
            value={firstName || ""}
            onChange={handleChange}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            autocomplete="off"
            required
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Middle Name"
            name="middleName"
            placeholder="Your Middle name"
            margin="normal"
            value={middleName || ""}
            autocomplete="off"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            margin="normal"
            value={lastName || ""}
            onChange={handleChange}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            autocomplete="off"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.email}
            helperText={formErrors.email}
            autocomplete="off"
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            value={phone || ""}
            onChange={handleChange}
            error={!!formErrors.phone}
            autocomplete="off"
            helperText={formErrors.phone}
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="Country of Residency"
            name="countryofResidency"
            placeholder="Your Country of Residency"
            margin="normal"
            value={countryofResidency || ""}
            onChange={handleChange}
            error={!!formErrors.countryofResidency}
            autocomplete="off"
            helperText={formErrors.countryofResidency}
            required
          />
        </Grid>

 

        <Grid item xs={12} md={12}>
          <TextField
            fullWidth
            label="What country do you live in?"
            name="livein"
            placeholder="What country do you live in?"
            margin="normal"
            value={livein || ""}
            onChange={handleChange}
            error={!!formErrors.livein}
            autocomplete="off"
            helperText={formErrors.livein}
            required
          />
        </Grid>
        <Grid item xs={12} md={12}>
        <div className="file-fild">
        <label style={{fontSize:"12px"}} for="formFileMultiple" class="form-label MuiFormLabel-root mt-4">Uplode your government-issued ID, such as a driver’s license, a state-issued photo ID, or a passport.</label>
        <input class="form-control mt-2" type="file" id="formFileMultiple" multiple />       
      </div>
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

export default PersonalInformation;
