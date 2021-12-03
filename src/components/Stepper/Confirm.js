import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { Fragment } from "react";

// Destructure props
const Confirm = ({
  handleNext,
  handleBack,
  values: {
    firstName,
    lastName,
    email,
    gender,
    SelectState,
    date,
    city,
    phone,
    countryofResidency,
    livein,
    middleName,
    streetAddress,
    countryName,
    file,
    stateProvinceinfo,
    zIPPostalCode,
    optionalinfo,
    companyName,
    businessAddressaction,
    CompanystreetAddress,
    CompanycountryName,
    Companycity,
    CompanystateProvinceinfo,
    CompanyzIPPostalCode,
    Companyoptionalinfo,
    ProductDescription,
    businessDescription,
    amount,
    parValue,
  },
}) => {
  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      email,
      gender,
      SelectState,
      date,
      city,
      phone,
      countryofResidency,
      livein,
      middleName,
      streetAddress,
      countryName,
      file,
      stateProvinceinfo,
      zIPPostalCode,
      optionalinfo,
      companyName,
      businessAddressaction,
      CompanystreetAddress,
      CompanycountryName,
      Companycity,
      CompanystateProvinceinfo,
      CompanyzIPPostalCode,
      Companyoptionalinfo,
      ProductDescription,
      businessDescription,
      amount,
      parValue,
    });
    handleNext();
  };

  // function sendEmail(e) {
  //   e.preventDefault();
  //   const sabdata = {};

  //   emailjs
  //     .sendForm(
  //       "service_a6f7a77",
  //       "template_fd0yhmf",
  //       e.target,
  //       "user_mMdVMXI9kItLPsc52GBRD"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }

  return (
    <Fragment>
      {/* <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div> */}

      <List disablePadding style={{ color: "#fff!important" }}>
        <ListItem>
          <ListItemText primary="First Name" light={firstName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={email} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.length > 0 ? phone : "Not Provided"}
          />
        </ListItem>
      </List>

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  );
};

export default Confirm;
