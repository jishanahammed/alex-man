import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
const CompanyDetails = ({
  handleNext,
  handleBack,
  handleChange,
  values: { ProductDescription, businessDescription },
  formErrors,
}) => {
  const isValid =
    ProductDescription.length > 0 &&
    !formErrors.ProductDescription &&
    businessDescription.length > 0 &&
    !formErrors.businessDescription;
  return (
    <div>
      <Fragment>
        <Typography
          variant="subtitle2"
          align="center"
          style={{ margin: "10px 0" }}
          className="TypographyTitle mt-5"
        >
          <h6>Provide some details about the business</h6>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div class="form-group mt-4 custom-textarea">
              <label for="exampleFormControlTextarea1">
                Product Description
              </label>
              <textarea
                class="form-control"
                rows="3"
                name="ProductDescription"
                placeholder="Enter your Product Description"
                value={ProductDescription || ""}
                margin="normal"
                onChange={handleChange}
                error={!!formErrors.ProductDescription}
                helperText={formErrors.ProductDescription}
                required
              ></textarea>
              <small class="form-text  text-danger">
                {formErrors.ProductDescription}
              </small>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div class="form-group custom-textarea">
              <label for="exampleFormControlTextarea1">
                Business Description
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="businessDescription"
                placeholder="Enter your Business Description"
                value={businessDescription || ""}
                margin="normal"
                onChange={handleChange}
                error={!!formErrors.businessDescription}
                helperText={formErrors.businessDescription}
                required
              ></textarea>
              <small class="form-text  text-danger">
                {formErrors.businessDescription}
              </small>
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
    </div>
  );
};

export default CompanyDetails;
