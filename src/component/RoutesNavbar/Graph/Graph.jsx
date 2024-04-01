import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../Footer/Footer'
import { ForGraphAction } from '../../Redux/Action/ForGraphAction';
import { useDispatch, useSelector } from 'react-redux';


import { Bar } from 'react-chartjs-2';

import { ColumnChart } from 'react-chartkick'
import 'chartkick/chart.js'

import './graph.css' ;


const Graph = () => {
  const graph = useSelector(state => state.stock.for_graph);

  const [dateValue, setDateValue] = useState("2024-03-13");

  function DatePicker(e) {
    setDateValue(e.target.value);
  }

  console.log(dateValue, "date valie asdf");

  console.log(graph, "graph");

  if (graph != undefined) {

    console.log(graph["2024-03-15"], "graph parse================")
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ForGraphAction())
  }, []);


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Share Data',
      },
    },
  };

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const labels = [
    {
      label: "Open",
      keyVal: "1. open"
    },
    {
      label: "high",
      keyVal: "2. high"
    },
    {
      label: "low",
      keyVal: "3. low"
    },
    {
      label: "closed",
      keyVal: "4. close"
    }
  ]




  const data = {
    labels: labels.map((item => {
      return item.label;
    })),
    datasets: [
      {
        label: 'Price',
        data: labels.map((item) => {
          if (graph != undefined) {

            const variable = graph[dateValue];
            if (variable != undefined) {

              return variable[item.keyVal];
            }
          }
          return 0;
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };




  return (
    <>
      <Header />

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <label htmlFor=""><strong>Select the date to preview data: </strong> </label> &nbsp;&nbsp;
              <input type="date" onChange={DatePicker} />
            </div>
          </div>
          <Bar options={options} data={data} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Graph