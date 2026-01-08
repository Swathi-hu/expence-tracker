import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || !category.trim()) {
      alert('Please fill in all fields.'); // Could replace with toast in future
      return;
    }
    setIsSubmitting(true);
    onAddExpense({ description: description.trim(), amount, category: category.trim() });
    setDescription('');
    setAmount('');
    setCategory('');
    setIsSubmitting(false);
  };

  const isFormValid = description.trim() && amount && category.trim();

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., Groceries"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount ($)</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g., 50.00"
          step="0.01"
          min="0"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., Food"
        />
      </div>
      <button 
        type="submit" 
        disabled={!isFormValid || isSubmitting}
        className={`submit-btn ${!isFormValid ? 'disabled' : ''}`}
        aria-label="Add expense"
      >
        {isSubmitting ? 'Adding...' : <><FaPlus /> Add Expense</>}
      </button>
    </form>
  );
};

export default ExpenseForm;