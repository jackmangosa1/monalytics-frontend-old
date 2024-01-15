'use client'
import { Progress } from '@mantine/core';
import { useState, useEffect } from 'react';



const ProgressBar = ({value, color}) => {

  const [progressBarValue, setProgressBarValue] = useState(0)
  const [progressBarColor, setProgressBarColor] = useState("")

  useEffect(() =>{
    setProgressBarValue( value )
    setProgressBarColor( color )
  }, [ value, color ])

  return (
    
    <div style={{width: '18rem'}}>
      <Progress.Root>
        <Progress.Section value={progressBarValue} color={progressBarColor}>
          <Progress.Label></Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </div>
   
  )
}

export default ProgressBar
