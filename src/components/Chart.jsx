import React from 'react';
import '../assets/Chart.css';

function Chart({currentAmount,targetAmount}) {

  return (
    <div className="progressContainer">
      <div className="progressText">
        <span className="currentAmount bold-text">{currentAmount}/</span>
        <span className="targetAmount">{targetAmount}</span>
      </div>
      <div className="progressBar">
        <div className="progressFill" style={{ width: `${(100 * currentAmount) / targetAmount}%` }} />
      </div>
    </div>
  );
}

export default Chart;
