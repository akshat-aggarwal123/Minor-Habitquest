import { Container, Form, ListGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Recommendations.css'; // We will create styles here

const Recommendations = () => {
  const [query, setQuery] = useState('');
  const [selectedHabits, setSelectedHabits] = useState([]);

  const allHabits = [
    'Meditation',
    'Workout',
    'Reading',
    'Water Intake',
    'Early Wake-up',
    'Journaling',
    'Gratitude Writing',
    'Stretching',
    'Walking 10,000 Steps',
    'Healthy Eating',
    'No Phone Before Bed',
    'Mindfulness',
    'Learning New Skills',
    'Yoga Practice',
    'Writing Blog',
  ];

  // Filter recommendations based on search query
  const filteredHabits = allHabits.filter(habit =>
    habit.toLowerCase().includes(query.toLowerCase())
  );

  // Add selected habit
  const addHabit = (habit) => {
    if (!selectedHabits.includes(habit)) {
      setSelectedHabits([...selectedHabits, habit]);
    }
  };

  return (
    <Container className="py-5 recommendation-bg">
      <h2 className="text-light mb-4 text-center">Find New Habits ✨</h2>

      <Form.Control
        type="text"
        placeholder="Search a habit..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4"
      />

      <ListGroup>
        {filteredHabits.map((habit, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => addHabit(habit)}
            className="recommendation-item"
          >
            {habit}
          </ListGroup.Item>
        ))}
      </ListGroup>

      {selectedHabits.length > 0 && (
        <div className="mt-5">
          <h4 className="text-light">Selected Habits:</h4>
          <ListGroup variant="flush">
            {selectedHabits.map((habit, index) => (
              <ListGroup.Item key={index} className="text-success">
                {habit}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}
    </Container>
  );
};

export default Recommendations;
