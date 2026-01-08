import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

// Group expenses by category
const groupByCategory = (expenses) => {
  const grouped = {};
  expenses.forEach(exp => {
    const cat = exp.category;
    grouped[cat] = (grouped[cat] || 0) + parseFloat(exp.amount);
  });
  return Object.entries(grouped).map(([name, value]) => ({ name, value }));
};

const ExpenseChart = ({ expenses }) => {
  const data = groupByCategory(expenses);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  if (data.length === 0) return null;

  return (
    <div className="chart-card">
      <h3>Expenses by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;