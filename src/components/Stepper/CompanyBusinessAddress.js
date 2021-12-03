import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
// Destructuring props
const CompanyBusinessAddress = ({
  handleNext,
  handleBack,
  handleChange,
  values: {
    CompanystreetAddress,
    CompanycountryName,
    Companycity,
    CompanystateProvinceinfo,
    CompanyzIPPostalCode,
    Companyoptionalinfo,
  },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    Companycity.length > 0 &&
    !formErrors.Companycity &&
    CompanycountryName.length > 0 &&
    !formErrors.CompanycountryName &&
    CompanystateProvinceinfo.length > 0 &&
    !formErrors.CompanystateProvinceinfo &&
    CompanyzIPPostalCode.length > 0 &&
    !formErrors.CompanyzIPPostalCode;

  return (
    <>
      <Typography
        variant="subtitle2"
        align="center"
        style={{ margin: "10px 0" }}
        className="TypographyTitle mt-5 mb-4"
      >
        <h6>Company Business Address</h6>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Country"
            name="CompanycountryName"
            placeholder="Enter your Country"
            value={CompanycountryName || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.CompanycountryName}
            helperText={formErrors.CompanycountryName}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="City"
            name="Companycity"
            placeholder="Enter your city"
            value={Companycity || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.Companycity}
            helperText={formErrors.Companycity}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Street Address"
            name="CompanystreetAddress"
            placeholder="Enter your Street Address"
            value={CompanystreetAddress || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.CompanystreetAddress}
            helperText={formErrors.CompanystreetAddress}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="State/Province"
            name="CompanystateProvinceinfo"
            placeholder="Enter your State/Province"
            value={CompanystateProvinceinfo || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.CompanystateProvince}
            helperText={formErrors.CompanystateProvince}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label=" ZIP/Postal Code"
            name="CompanyzIPPostalCode"
            placeholder="Enter your ZIP/Postal Code"
            value={CompanyzIPPostalCode || ""}
            margin="normal"
            onChange={handleChange}
            error={!!formErrors.CompanyzIPPostalCode}
            helperText={formErrors.CompanyzIPPostalCode}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Suite, etc.(Optional)"
            name="Companyoptionalinfo  "
            placeholder="Enter your ZIP/Postal Code"
            value={Companyoptionalinfo || ""}
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

export default CompanyBusinessAddress;
