'use client';
import { Suspense } from 'react';
import styles from './page.module.css';
import { UilInstagram, UilFacebook, UilTwitter } from '@iconscout/react-unicons';
import LineChartWrapper from './components/LineChart';
import BarChartWrapper from './components/BarChart';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>MENTIONS</p>
            <p className={styles.cardValue}>27K</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>POSITIVE</p>
            <p className={styles.cardValue}>200M</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>NEGATIVE</p>
            <p className={styles.cardValue}>100K</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardRate}>
              <span className={styles.rateValue}>+10.5k </span>
              <span className={styles.ratePercentage}>(+10%)</span>
            </div>
            <Suspense fallback={<div>Loading charts...</div>}>
              <LineChartWrapper data={data} />
            </Suspense>
          </div>

          <div className={styles.card}>
            <div className={styles.cardRate}>
              <span className={styles.rateValue}>+6.5K </span>
              <span className={styles.ratePercentage}>(+15%)</span>
            </div>
            <Suspense fallback={<div>Loading charts...</div>}>
              <LineChartWrapper data={data} />
            </Suspense>
          </div>

          <div className={styles.card}>
            <div className={styles.cardRate}>
              <span className={styles.rateValue}>+20.5K </span>
              <span className={styles.ratePercentage}>(+20%)</span>
            </div>
            <Suspense fallback={<div>Loading charts...</div>}>
              <LineChartWrapper data={data} />
            </Suspense>
          </div>
        </div>
        <div className={styles.right}>
          {/* <Suspense fallback={<div>Loading charts...</div>}> */}
            <BarChartWrapper data={data} />
          {/* </Suspense> */}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.channelTitle}>Channels</p>

          <div className={styles.progressBars}>
            <div className={styles.progressBarWrapper}>
              <UilInstagram size={35} className={styles.icon} />
              <div className={styles.progressBar}>
                <p className={styles.progressBarTitle}>Instagram</p>
                <ProgressBar value={60} color='rgb(255,153,57)' />
              </div>
              <div className={styles.progressPercentage}>60% <span>hits</span></div>
            </div>

            <div className={styles.progressBarWrapper}>
              <UilTwitter size={35} className={styles.icon} />
              <div className={styles.progressBar}>
                <p className={styles.progressBarTitle}>Twitter</p>
                <ProgressBar value={40}  color='rgb(255,153,57)'/>
              </div>
              <div className={styles.progressPercentage}> 40% <span>hits</span></div>
            </div>

            <div className={styles.progressBarWrapper}>
              <UilFacebook size={35} className={styles.icon} />
              <div className={styles.progressBar}>
                <p className={styles.progressBarTitle}>Facebook</p>
                <ProgressBar value={80} color='rgb(255,153,57)' />
              </div>
              <div className={styles.progressPercentage}>80% <span>hits</span></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.channelTitle}>Strongest Hashtags</p>

          <div className={styles.progressBars}>
            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBar}>
                <p className={styles.progressBarTitle}>Tag 1</p>
                <ProgressBar value={60}  color='rgba(43,194,85, 0.6)'/>
              </div>
              <div className={styles.progressPercentage}>60% <span>hits</span></div>
            </div>

            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBar}>
                <p className={styles.progressBarTitle}>Tag 2</p>
                <ProgressBar value={40} color='rgba(43,194,85, 0.6)'/>
              </div>
              <div className={styles.progressPercentage}> 40% <span>hits</span></div>
            </div>

            <div className={styles.progressBarWrapper}>
              <div className={styles.progressBar}>
              <p className={styles.progressBarTitle}>Tag 3</p>
                <ProgressBar value={80} color='rgba(43,194,85, 0.6)'/>
              </div>
              <div className={styles.progressPercentage}>80% <span>hits</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
