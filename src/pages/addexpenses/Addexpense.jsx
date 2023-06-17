import React from "react";
import { Link } from "react-router-dom";
import Button from "../../properties/Button";
import DashboardLayout from "../../componet/DashboardLayout";
import "../addexpenses/addexpense.css";
function Addexpense() {
  return (
    <div className="containerAddexpense">
      <DashboardLayout>
        <div className="addnew">
          <div className="addexpense">
            <h2>ADD EXPENSE</h2>
            <input type="text" placeholder="Expense type" />
            <br />
            <input type="text" placeholder="Amount spent" />
            <br />
            <input type="text" placeholder="Period" />
            <div className="addbtn">
              <Link to="/expenses">
                <Button btnName="SAVE"></Button>
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Addexpense;
