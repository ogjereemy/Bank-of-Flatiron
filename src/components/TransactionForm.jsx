import React, { useState } from 'react';
// import './TransactionForm.css';

function TransactionForm({ onAddTransaction }){
  const keys = [{ date: '', description: '', category: '', amount: '' }]
  const [data, setData] = useState(keys);

  function handleChange(e){
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function handleSubmit(e){
    e.preventDefault();
    if (data.date && data.description && data.category && data.amount) {
      onAddTransaction(data);
      setData(keys);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input 
        type="Date" 
        name="date" 
        value={data.date} 
        onChange={handleChange} 
        placeholder="Date" 
      />
      <input 
        type="text" 
        name="description" 
        value={data.description} 
        onChange={handleChange} 
        placeholder="Description" 
      />
      <input 
        type="text" 
        name="category" 
        value={data.category} 
        onChange={handleChange} 
        placeholder="Category" 
      />
      <input 
        type="number" 
        name="amount" 
        value={data.amount} 
        onChange={handleChange} 
        placeholder="Amount" 
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;