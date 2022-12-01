import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter color="blue" className="font-small pt-1 mt-1">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">Footer Content</h5>
              <p>Here you can use rows and columns here to organize your footer content.</p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-1">
          <MDBContainer fluid>&copy; {new Date().getFullYear()} Copyright: CSM</MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
