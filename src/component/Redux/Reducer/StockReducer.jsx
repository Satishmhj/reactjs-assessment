import {
 FOR_GRAPH,
 FOR_TABLE
  } from "../Constant";
  
  const INITIAL_STATE = {
    for_table: [],
    for_graph: [],
  };
  
  const StockReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FOR_TABLE:
        return {
          ...state,
          for_table: action.payload,
        };
      case FOR_GRAPH:
        return {
          ...state,
          for_graph: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default StockReducer;