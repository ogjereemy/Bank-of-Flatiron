// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TransactionTable from '../src/components/TransactionTable';
import TransactionForm from '../src/components/TransactionForm';
import TransactionSearch from '../src/components/TransactionSearch';


function App(){
  const initialTransactions = [
    { date: '2024-10-10', description: "Bought fries", category: "Food", amount: 1500 },
    { date: '2024-10-12', description: "Movies", category: "Entertainment", amount: 750 },
    { date: '2024-10-03', description: "Paid rent", category: "Accomodation", amount: 12000 },
    { date: '2024-11-04', description: "Paid school fees", category: "Schooling", amount: 20000 },
    { date: '2024-11-11', description: "Went partying", category: "Entertainment", amount: 4000 },
  
  ]
  const [transactions, setTransaction] = useState(initialTransactions);
  const [filterTransaction, setFilterTransaction] = useState(transactions);


  
  function handleAddTransaction(data){
    setTransaction([...transactions, data]);
    setFilterTransaction([...transactions, data]);
  };
  
  function handleSearch(searchTerm){
     const filterTransaction = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
      setFilterTransaction(filterTransaction);
  };

  return (
    <div>
      <h1>BANK TRANSACTION</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionSearch onSearch={handleSearch} />
      <TransactionTable transactions={filterTransaction} />
      
    </div>
  );
}

export default App;