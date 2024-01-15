'use client'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import styles from '../page.module.css'

const LineChartWrapper = ({data}) => {
  return (
    <div>
       <LineChart width={150} height={50} data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                className={styles.lineBar}
                  >
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </div>
  )
}

export default LineChartWrapper 
