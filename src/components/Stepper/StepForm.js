import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import imgurl from "../../../src/asset/logo.png";
import formValidation from "../Helper/formValidation";
import ChooseState from "./ChooseState";
import CompanyName from "./CompanyName";
import Confirm from "./Confirm";
// import FirstStep from "./FirstStep";
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
          <PhysicalOperatingAddress
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 3:
        return (
          <CompanyName
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 4:
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
      <div className="col-md-6">
        <div className="card shadow ">
          <div className="card-body">
            {activeStep === labels.length ? (
              // Last Component
              <Success values={formValues} />
            ) : (
              <>
                <Box style={{ margin: "10px 0 10px" }}>
                  <Typography variant="h4" align="center">
                    <div className="mb-4 logo-w">
                      <img src={imgurl} />
                    </div>
                  </Typography>
                </Box>

                {handleSteps(activeStep)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
