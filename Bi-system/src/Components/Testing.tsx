import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const Abcense = () => {
  const [chartData, setChartData] = useState({});
  const [yeayr, setYear] = useState([]);
  const [monthName, setMonthName] = useState([]);
  const [absenceCount, setAbsenceCount] = useState([]);

  const chart = () => {
    const empYear: number[] = [];
    const empMonth: string[] = [];
    const empAbcenseCount: string[] = [];
    axios
      .get("api.mocki.io/v1/262c6789")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empYear.push(parseInt(dataObj.employee_salary));
          empMonth.push(dataObj.employee_age);
          empAbcenseCount.push(dataObj.employee_age);
        }
        setChartData({
          labels: empYear,
          datasets: [
            {
              label: "level of thiccness",
              data: empMonth,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empAbcenseCount, empMonth, empYear);
  };
  
  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1></h1>
      <div>
      </div>
    </div>
  );
};

export default Abcense;