import { Container, Card } from 'react-bootstrap';
import { motion } from 'framer-motion'; // For animation

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    habits: ['Walking', 'Water Intake', 'Reading']
  };

  return (
    <div className="profile-background">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="p-4 profile-card text-light">
            <h2 className="text-center mb-4">Profile Details</h2>
            <hr />
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Habits:</strong></p>
            <ul>
              {user.habits.map((habit, index) => (
                <li key={index}>{habit}</li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default Profile;
