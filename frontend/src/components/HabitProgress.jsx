// HabitProgress.jsx
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Form } from 'react-bootstrap';

const HabitProgress = () => {
  const { habits } = useSelector((state) => state.allHabits);
  const [selectedHabit, setSelectedHabit] = useState(habits[0]?.title || '');

  const findHabit = habits.find((habit) => habit.title === selectedHabit);

  const calculateProgress = (habit) => {
    if (!habit) return 0;
    const totalDays = habit.details.length;
    const doneDays = habit.details.filter((d) => d.status === 'done').length;
    return Math.round((doneDays / totalDays) * 100);
  };

  const percentage = calculateProgress(findHabit);

  return (
    <div style={{ width: 200, margin: 'auto', padding: '20px' }}>
      <Form.Select
        value={selectedHabit}
        onChange={(e) => setSelectedHabit(e.target.value)}
        className="mb-4"
      >
        {habits.map((habit, idx) => (
          <option key={idx} value={habit.title}>
            {habit.title}
          </option>
        ))}
      </Form.Select>

      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: '#00c853',   // Green
          trailColor: '#3a3a3a',   // Dark background trail
        })}
      />
    </div>
  );
};

export default HabitProgress;
