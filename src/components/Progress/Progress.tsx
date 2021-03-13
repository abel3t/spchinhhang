import React, { useState } from 'react'
import { ProcessWapper, ProcessBarStyle } from './Progress.style'
import { width } from 'styled-system'

type ProgressProps = {
  percentage?: number
  width?: number
}

const Progress: React.FC<ProgressProps> = ({percentage,width}) => {
//   const [percentage] = useState(0)
  return (
    <ProcessWapper className="progress-bar" style={{width: `${width ? width : `275`}px`}}>
    <ProcessBarStyle className="filler" style={{ width: `${percentage}%` }} />
  </ProcessWapper>
  )
}

export default Progress
