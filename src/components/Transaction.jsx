

import React from 'react'

const Transaction = ({ date, description, category, amount }) => {
  return (
    <tr id='tril'>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
