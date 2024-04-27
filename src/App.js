// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TransactionTable from '../src/components/TransactionTable';
import TransactionForm from '../src/components/TransactionForm';
import TransactionSearch from '../src/components/TransactionSearch';


function App(){
  const [transactions, setTransactions] = useState([
    { date: '2024-10-10', description: "Bought fries", category: "Food", amount: 1500 },
    { date: '2024-10-12', description: "Movies", category: "Entertainment", amount: 750 },
    { date: '2024-10-03', description: "Paid rent", category: "Accomodation", amount: 12000 },
    { date: '2024-11-04', description: "Paid school fees", category: "Schooling", amount: 20000 },
    { date: '2024-11-11', description: "Went partying", category: "Entertainment", amount: 4000 },
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  // useEffect(() => {
  //   setFilteredTransactions(transactions);
  // }, [transactions]);
  
  // function handleAddTransaction(formData){
  //   setTransactions([...transactions, formData]);
  // };
  
  // function handleSearch(searchTerm){
  //    const filteredTransactions = transactions.filter(transaction =>
  //     transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //     setFilteredTransactions(filteredTransactions);
  // };

  // return (
  //   <div>
  //     <h1>BANK TRANSACTION</h1>
  //     <TransactionForm onAddTransaction={handleAddTransaction} />
  //     <TransactionSearch onSearch={handleSearch} />
  //     <TransactionTable transactions={filteredTransactions} />
      
  //   </div>
  // );
}

export default App;