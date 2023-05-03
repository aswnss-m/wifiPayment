import React from 'react';
import '../assets/PayedTable.css';

function PayedTable() {
  return (
    <div className='payedTableContainer'>
      <table className='payedTable'>
        <caption>PAYMENT DONE</caption>
        <tbody>
          <tr className='payedTableRow'>
            <td>Aswin Lal M</td>
            <td>10:30AM</td>
          </tr>
          <tr className='payedTableRow'>
            <td>Aswin Lal M</td>
            <td>10:30AM</td>
          </tr>
          <tr className='payedTableRow'>
            <td>Aswin Lal M(RAhul)</td>
            <td>10:30AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PayedTable;
