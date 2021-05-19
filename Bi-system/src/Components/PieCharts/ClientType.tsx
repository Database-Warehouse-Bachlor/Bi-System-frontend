import axios from "axios";
import React, { PureComponent, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Sector,
  ResponsiveContainer,
  Cell,
} from "recharts";
import AuthenticationService from "../../Services/AuthenticationService";

const EmployeeGender = () => {
  const [customerNr, setCustomerNr] = useState();
  const [supplierNr, setSupplierNr] = useState();

  const data = [
    { name: "Kunde", value: customerNr },
    { name: "Leverandør", value: supplierNr },
  ];
  const chart = () => {
    //Api call to the backend getting the information about Client numbers
    //Authorizes using token stored in local storage.
    axios
      .get("web/clientnumbers", {
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
        setCustomerNr(res.data.numberOfCustomers);
        setSupplierNr(res.data.numberOfSuppliers);
      })
      .catch((err) => {
        console.log(err);
      });
  };


//Colors of pie chart
  const COLORS = ["#0088FE", "#00C49F"];

  let renderLabel = function(entry:any) {
      
    return entry.name;
}
  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <ResponsiveContainer width="99%" height={250}>
        <PieChart width={1000} height={500}>
          <Pie
            data={data}
            labelLine={true}
            label={renderLabel}
            outerRadius={80}
            fill="#eb6707"
            dataKey="value"
          />
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default EmployeeGender;
