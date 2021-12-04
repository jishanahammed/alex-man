import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import imgurl from "../../../src/asset/logo.png";
import formValidation from "../Helper/formValidation";
import AmountofShares from "./amountofShares";
import BusinessAddress from "./BusinessAddress";
import ChooseState from "./ChooseState";
import CompanyBusinessAddress from "./CompanyBusinessAddress";
import CompanyDetails from "./CompanyDetails";
import CompanyName from "./CompanyName";
import Confirm from "./Confirm";
import PersonalInformation from "./PersonalInformation";
import PhysicalOperatingAddress from "./PhysicalOperatingAddress ";
import Success from "./Success";
// Step titles
const labels = [
  "ChooseState",
  "PersonalInformation",
  "PhysicalOperatingAddress",
  "CompanyName",
  "Confirmation",
  "BusinessAddress",
  "CompanyBusinessAddress",
  "CompanyDetails",
  "AmountofShares",
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  SelectState: "",
  date: "",
  city: "",
  phone: "",
  countryofResidency: "",
  livein: "",
  middleName: "",
  streetAddress: "",
  countryName: "",
  file: "",
  stateProvinceinfo: "",
  zIPPostalCode: "",
  optionalinfo: "",
  companyName: "",
  businessAddressaction: "",
  CompanystreetAddress: "",
  CompanycountryName: "",
  Companycity: "",
  CompanystateProvinceinfo: "",
  CompanyzIPPostalCode: "",
  Companyoptionalinfo: "",
  ProductDescription: "",
  businessDescription: "",
  amount: "",
  parValue: "",
};

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 50,
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 50,
  },
  countryofResidency: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 100,
  },
  livein: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  middleName: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20,
  },
  streetAddress: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 50,
  },
  countryName: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 50,
  },
  email: {
    error: "",
    validate: "email",
  },
  gender: {},
  SelectState: {},
  date: {},
  city: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 50,
  },
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15,
  },

  stateProvinceinfo: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  zIPPostalCode: {
    error: "",
    validate: "isZip",
  },
  optionalinfo: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  companyName: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  businessAddressaction: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  CompanystreetAddress: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  CompanycountryName: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  Companycity: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  CompanystateProvinceinfo: {
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 200,
  },
  CompanyzIPPostalCode: {
    error: "",
    validate: "isZip",
  },
  Companyoptionalinfo: {
    error: "",
    validate: "text",
    minLength: 1,
    maxLength: 200,
  },
  ProductDescription: {
    error: "",
    validate: "text",
    minLength: 0,
    maxLength: 200,
  },
  businessDescription: {
    error: "",
    validate: "text",
    minLength: 0,
    maxLength: 200,
  },
  amount: {
    error: "",
    validate: "isNumber",
    minLength: 0,
    maxLength: 200,
  },
  parValue: {
    error: "",
    validate: "isNumber",
    minLength: 0,
    maxLength: 200,
  },
};

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error,
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <ChooseState
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <PersonalInformation
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );

      case 2:
        return (
          <CompanyName
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 3:
        return (
          <PhysicalOperatingAddress
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );

      case 4:
        return (
          <BusinessAddress
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );

      case 5:
        return (
          <CompanyBusinessAddress
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 6:
        return (
          <CompanyDetails
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 7:
        return (
          <AmountofShares
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );

      case 8:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      default:
        break;
    }
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "100px" }}
    >
      <div className="col-md-6 mb-5">
        <Box style={{ margin: "10px 0 10px" }}>
          <Typography variant="h4" align="center">
            <div className="mb-4 logo-w">
              <img src={imgurl} />
            </div>
          </Typography>
        </Box>

        <div className="card shadow ">
          <div className="card-body">
            {activeStep === labels.length ? (
              // Last Component
              <Success values={formValues} />
            ) : (
              <>{handleSteps(activeStep)}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
