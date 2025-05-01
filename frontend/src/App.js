import Header from './components/Header';
import Overview from './components/Overview';
import HabitDisplay from './components/HabitDisplay';
import HabitProgress from './components/HabitProgress';
import Profile from './components/Profile'; // <-- New Profile page
import Recommendations from './components/Recommendations'; // Import it!

import { Row, Col, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- React Router
import Typed from 'typed.js';

function HomePage() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col md={3}>
          {/* Overview component */}
          <Overview />

          {/* HabitProgress component */}
          <div className='mt-4 d-flex justify-content-center'>
            <HabitProgress />
          </div>
        </Col>

        <Col md={9}>
          {/* HabitDisplay Component */}
          <HabitDisplay />
        </Col>
      </Row>

      <h4 className='text-light d-flex mt-5 justify-content-center'>
        <span className='tag'></span>
      </h4>
    </Container>
  );
}

function App() {
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        "...okay. Let's start by tracking a habit for next seven days.",
        "It's never too late to develop good habits.",
        'Good habits formed at youth makes all the difference - Aristotle',
        'Motivation is what gets you started. Habit is what keeps you going.',
        'Habits change into character.',
      ],
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
