  
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap';
import './Chart.css';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const chart = () => {
    //Creating variables to store data
    let Fore = [];
    let Act = [];

    //Using axios to get the API data and then pushing/parsing this data into the empty variables
    axios
      .get('https://api.carbonintensity.org.uk/intensity/2020-09-01T15:30Z/2020-09-10T17:00Z')
      .then(res => {
        for (const dataObj of res.data.data) {
          Fore.push(parseInt(dataObj.intensity.forecast));
          Act.push(parseInt(dataObj.intensity.actual));
        }
        //Setting up the chart data with the data from API
        setChartData({
          labels: Fore,
          datasets: [
            {
              label: "Carbon Intensity Levels",
              data: Act,
              backgroundColor: "#F58A07",
              borderWidth: 4
            }
          ]
        });
      })
      //Catching the error from API if there is one
      .catch((error) => {

        setError(error);
      })
      //Setting up the loading to true 
      .finally(() => {
        setIsLoaded(true);  
      })
  };

  //Calling the chart
  useEffect(() => {
    chart();
  }, []);
  //Using an if statement to render the chart 
  //If there is an error than the caught error will display as a message
  //If no error then whilst API is loading the bootstrap spinner animation will run
  //Once API is loaded then the Line chart is displayed
  if (error) {
    return  <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="chart"> <ReactBootStrap.Spinner animation="border"/> </div>;
  } else {
    return (
      <div className="App">
        <div className="chart">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              title: { text: "2020-09-01T15:30Z - 2020-09-10T17:00Z", display: true },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 100,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Actual"
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Forecast"
                    }

                  }
                ]
              }
            }} />
        </div>
      </div>
    );
  }
};

export default Chart;
