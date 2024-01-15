'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { useState, useEffect } from 'react';

const BarChartWrapper = ({data}) => {

  const [ barChartData, setBarChartData ] = useState([])
  useEffect(() =>{
      setBarChartData( data )
  }, [ data])

  return (
    <div>
      <BarChart width={500} height={310} data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="rgb(97,55,189)" />
              <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default BarChartWrapper;
