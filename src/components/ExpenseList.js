import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>No expenses added yet. Start tracking!</p>
      </div>
    );
  }

  return (
    <div className="expense-list">
      <h2>Your Expenses ({expenses.length})</h2>
      <div className="expenses-container">
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onDelete={onDeleteExpense}
            style={{ animationDelay: `${index * 0.1}s` }} // Staggered fade-in
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;