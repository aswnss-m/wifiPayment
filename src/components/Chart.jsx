import React from 'react'
import "../assets/Chart.css"
// import { useState } from 'react'

function Chart() {
    // const [percent,Setpercent] = useState(0);
    // const totalAmount = 830;
    const currentAmount = 100;
    const targetAmount = 830;


  return (
        <div className="bg-white progressCricle " style={{'--percentage': (100 * currentAmount / targetAmount) + '%'}}>
            <div className="amount">
                <span className="currentAmount">{currentAmount}</span><span className="targetAmount">/{targetAmount}</span>
            </div>
        </div>
  )
}

export default Chart