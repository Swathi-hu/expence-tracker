import React, { useState } from 'react';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'; // Icons
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [toast, setToast] = useState({ message: '', type: '' }); // For notifications

  // Show toast
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: '' }), 3000);
  };

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Math.random().toString() }]);
    showToast('Expense added successfully!');
  };

  // Delete an expense with confirmation
  const deleteExpense = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      setExpenses(expenses.filter(exp => exp.id !== id));
      showToast('Expense deleted!');
    }
  };

  // Clear all expenses
  const clearAll = () => {
    if (window.confirm('Delete all expenses? This cannot be undone.')) {
      setExpenses([]);
      showToast('All expenses cleared!');
    }
  };

  // Calculate total
  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Expense Tracker</h1>
        <p>Track your spending effortlessly</p>
      </header>
      
      <Toast message={toast.message} type={toast.type} />
      
      <div className="main-content">
        <ExpenseForm onAddExpense={addExpense} />
        
        <div className="stats-card">
          <h2>Total Spent: <span className="total-amount">${total.toFixed(2)}</span></h2>
          {expenses.length > 0 && (
            <button onClick={clearAll} className="clear-all-btn" aria-label="Clear all expenses">
              <FaTrashAlt /> Clear All
            </button>
          )}
        </div>
        
        {expenses.length > 0 && <ExpenseChart expenses={expenses} />}
        
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;