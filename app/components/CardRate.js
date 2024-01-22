import { Suspense } from 'react';
import styles from "../../styles/CardRate.module.css"
import LineChartWrapper from './LineChart';
import { data } from "../page";

const CardRate = ({ value, percentage }) => {
  return (
    <div>
        <div className={styles.cardRate}>
            <span className={styles.rateValue}>+{value}k </span>
            <span className={styles.ratePercentage}>(+{percentage}%)</span>
        </div>
        <Suspense fallback={<div>Loading charts...</div>}>
            <LineChartWrapper data={data} />
        </Suspense>
    </div>
  )
}

export default CardRate
