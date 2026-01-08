import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <div className="expense-item">
      <div className="expense-details">
        <span className="description">{expense.description}</span>
        <span className="category">({expense.category})</span>
      </div>
      <div className="expense-amount">${parseFloat(expense.amount).toFixed(2)}</div>
      <button 
        onClick={() => onDelete(expense.id)} 
        className="delete-btn" 
        aria-label={`Delete ${expense.description}`}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ExpenseItem;