import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export class Despre extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Building Name</th>
              <th>Work Remote</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}
export default Despre;
