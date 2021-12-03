import Typography from "@material-ui/core/Typography";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";
import imgurl from "../../../src/asset/logo.png";
const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <Typography variant="h4" align="center">
                  <div className="mb-4 logo-w">
                    <img src={imgurl} />
                  </div>
                </Typography>

                <div className="well-text">
                  <p className="mb-4">
                    <b style={{ fontSize: "20px" }}>Welcome </b> to Fuller
                    Landau, an independent audit firm providing audit, tax, and
                    advisory services. Our mission is to provide every business
                    client auditing, accounting and consultancy solutions they
                    can trust. Our team of experts pays attention to the finer
                    details and adopts an “out-of-the-box” approach to provide
                    client brand incredible value. To walk-the-talk, our
                    partners mandate us with the expression opinion on 5 most
                    fundamental aspects, which include :
                  </p>

                  <div className="d-flex justify-content-start text-light  m-3">
                    <ListItemIcon className="text-light">
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Borrower’s Credit history" />
                  </div>

                  <div className="d-flex justify-content-start text-light m-3">
                    <ListItemIcon className="text-light">
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Borrower’s Cash flow history and projections for the business" />
                  </div>

                  <div className="d-flex justify-content-start text-light m-3">
                    <ListItemIcon className="text-light">
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Collateral available to secure the loan (ONLY applicable for secured loans)
"
                    />
                  </div>

                  <div className="d-flex justify-content-start text-light m-3">
                    <ListItemIcon className="text-light">
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Borrower’s Character" />
                  </div>
                </div>
                <p className="mt-4 text-light">
                  By filling the form that follows, you agree to our terms and
                  condition.
                </p>
                <div className="text-center mt-5 mb-4 alex-btn">
                  <Button variant="contained">
                    <Link className="text-light" to="/stepForm">
                      Continue to fill the form
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
