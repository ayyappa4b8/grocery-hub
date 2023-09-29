import React from 'react'
import { useState } from 'react';
import TestChild from './TestChild';

const TestParent = () => {
    const [count,setCount] = useState(0);

    const incCount=()=>{
        setCount(count+1)
      }
    
      const decCount=(data)=>{
        setCount(count-1)
      }
  return (
    <div>TestParent:
        {count}
        <TestChild incCount={incCount} decCount={decCount} count={count}/>
    </div>
  )
}

export default TestParent