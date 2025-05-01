import { Nav, Container, Image, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 
import profilePic from '../assets/PP.jpg'; // Import your glowing Earth profile pic

const Header = () => {
  const navigate = useNavigate();
  const date = new Date();

  return (
    <Nav className="bg-primary p-2 background">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo, Click to go Home */}
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <Image src={logo} alt="Habit Quest Logo" style={{ height: '50px' }} />
        </div>

        {/* Right Side Controls */}
        <div className="d-flex align-items-center gap-3">
          <Button variant="outline-light" size="sm" onClick={() => navigate('/recommendations')}>
            Recommendations
          </Button>

          <span className="text-light">{date.toDateString()}</span>

          {/* Profile Icon */}
          <div
            onClick={() => navigate('/profile')}
            style={{ cursor: 'pointer' }}
            className="rounded-circle p-0 profile-glow"
          >
            <Image
              src={profilePic}
              roundedCircle
              fluid
              style={{ width: '45px', height: '45px' }}
            />
          </div>
        </div>
      </Container>
    </Nav>
  );
};

export default Header;
