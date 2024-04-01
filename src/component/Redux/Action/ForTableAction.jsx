import { FOR_TABLE } from "../Constant";

export const ForTableAction = () => async (dispatch) => {
  dispatch({
    type: FOR_TABLE,
  });
  let res = await fetch("https://www.alphavantage.co/query?function=MARKET_STATUS&apikey=demo")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  dispatch({
    type: FOR_TABLE,
    payload: res,
  });
};
