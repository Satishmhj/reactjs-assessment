import { FOR_GRAPH } from "../Constant";

// export const ForGraphAction = () => async (dispatch) => {
//   dispatch({
//     type: FOR_GRAPH,
//   });
//   let res = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo")
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });

//     console.log(res);

//   dispatch({
//     type: FOR_GRAPH,
//     payload: res,
//   });
// };

export const ForGraphAction = () => async (dispatch) => {
  dispatch({
    type: FOR_GRAPH, // Dispatching the action to initiate the request
  });

  try {
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo");
    const data = await response.json();

    console.log(data, "data------------------");
    
    const weeklyData = parseWeeklyData(data);

    dispatch({
      type: FOR_GRAPH, // Dispatching the action with the parsed data
      payload: weeklyData,
    });
  } catch (error) {
    dispatch({
      type: FOR_GRAPH, // Dispatching the action with the error message
      error: true,
      payload: error.message,
    });
  }
};

const parseWeeklyData = (data) => {
  return data["Weekly Adjusted Time Series"];
};



