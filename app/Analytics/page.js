'use client';
import { Suspense } from 'react';
import styles from '../../styles/Analytics.module.css';
import { UilInstagram, UilFacebook, UilTwitter } from '@iconscout/react-unicons';
import LineChartWrapper from '../components/LineChart';
import BarChartWrapper from '../components/BarChart';
import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import CardRate from '../components/CardRate';
import { data } from '../page'
import CompetitorLeaderboard from '../components/CompetitorLeaderboard';




const Analytics = () => {

    const personCompetitor = [
        {
            id:'1',
            name: 'ken Alba',
            point: '637',
            photo: '../../assets/profile.jpg',
            place: '6',
        },

        {
            id:'2',
            name: 'Alicce LeBeau',
            point: '637',
            photo: '../../assets/profile.jpg',
            place: '7',
        },

        {
            id:'3',
            name: 'Adrian Lu',
            point: '637',
            photo: '../../assets/profile.jpg',
            place: '8',
        },
    ]
    
        const companyCompetitor = [
            {
                id:'1',
                name: 'MTN',
                point: '637',
                place: '6',
            },
    
            {
                id:'2',
                name: 'AIRTEL',
                point: '637',
                place: '7',
            },
    
            {
                id:'3',
                name: 'TIGO',
                point: '637',
                place: '8',
            },
         ]

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Card title="MENTIONS" value="27K"/>
          <Card title="POSITIVE" value="20M"/>
          <Card title="NEGATIVE" value="100K"/>
         
          <CardRate value={10.5} percentage={10}/>
          <CardRate value={6.5} percentage={15}/>
          <CardRate value={20.5} percentage={20}/>
          
        </div>
        <div className={styles.right}>
          <Suspense fallback={<div>Loading charts...</div>}>
            <BarChartWrapper data={data} />
          </Suspense>
        </div>
      </div>
      <div className={styles.middle}>
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
      <div className={styles.competitors}>
        <CompetitorLeaderboard data={personCompetitor}/>
        <CompetitorLeaderboard data={personCompetitor}/>
      </div>
   


    </div>
  );
}

export default Analytics;
