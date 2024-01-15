import { Inter } from 'next/font/google'
import styles from './globals.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Monalityics',
  description: 'Make your decision based on data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MantineProvider>
        <body className={inter.className}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
          }}>
              <Sidebar style={{
                flex: 1,
              }}/>
              <div style={{
                flex: 5,
                backgroundColor: 'var(--mainBackgroundColor)',
                padding: '1rem',

              }}>
                
                <Header/>
                {children}
              </div>
             
          </div>
          </body>
      </MantineProvider>
     
    </html>
  )
}
