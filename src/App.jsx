import { useEffect, useState } from 'react'
import './App.css'
import Home from './component/Home'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ForTableAction } from './component/Redux/Action/ForTableAction';
import Table from './component/RoutesNavbar/Table/Tables';
import Graph from './component/RoutesNavbar/Graph/Graph';

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();

  const table = useSelector(state => state.stock.for_table);
  const graph = useSelector(state => state.stock.for_graph);

  useEffect (() => {
    dispatch(ForTableAction())
  }, []);

  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
