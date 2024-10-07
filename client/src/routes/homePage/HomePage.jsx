import { useNavigate } from 'react-router-dom';
import './homePage.scss';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/dashboard'); // Redirect to the dashboard
  };

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Track Your Health – Stay Informed, Stay Healthy!</h1>
          <p>
            Welcome to the Health Tracking System. Our platform is designed to help you monitor your vital health metrics such as body temperature, blood pressure, and heart rate. Stay updated on your health with real-time data tracking and analysis. Manage your health effortlessly and stay on top of your fitness goals.
          </p>
          <div className="buttonContainer">
            <button onClick={handleButtonClick} className="animated-button">
              <span className="button-text">📊 Start Tracking Your Health Today! 📊</span>
              <span className="button-subtext">Click Here to Log Your Metrics</span>
            </button>
          </div>

          {/* Updated Section: Supported by Health Professionals */}
          <div className="healthSupportedSection">
            <img src="/logo 2.jpeg" alt="Health Support Icon" className="icon" />
            <h2>Supported by Health Professionals</h2>
          </div>
        </div>
      </div>
      {/* Removed imgContainer */}
    </div>
  );
}

export default HomePage;
