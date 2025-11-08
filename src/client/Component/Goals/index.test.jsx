// GoalProgressForm.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import GoalProgressForm from './index';

const mockData = [
  { goal: 'Walking Steps', unit: '3000', max: '' },
  { goal: 'Calories Intake', unit: '2000', max: '' },
  { goal: 'Exercise Duration', unit: '45', max: '' },
  { goal: 'Sleep', unit: '8', max: '' },
];

describe('GoalProgressForm UI', () => {
  it('renders the table with all goals', () => {
    render(<GoalProgressForm data={mockData} />);

   
    expect(screen.getByText('Goal')).toBeInTheDocument();
    expect(screen.getByText(/Min/i)).toBeInTheDocument();
    expect(screen.getByText(/Max/i)).toBeInTheDocument();

   
    mockData.forEach((item) => {
      expect(screen.getByDisplayValue(item.unit)).toBeInTheDocument();
      expect(screen.getByText(item.goal)).toBeInTheDocument();
    });

    
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('renders 5 stars for stress level', () => {
    render(<GoalProgressForm data={mockData} />);
    const stars = screen.getAllByText('★');
    expect(stars.length).toBe(5);
  });
});
