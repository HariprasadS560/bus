
import React, { useState } from 'react';
import PopupMessage from './PopupMessage';
import './LoginForm.css'; // Import CSS file for styling

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationPermission(true);
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        // You can send latitude and longitude to your server if needed
      },
      (error) => {
        setLocationPermission(false);
        console.error('Error getting location:', error.message);
        setPopupMessage('Location permission denied. Please allow access to proceed.');
        setIsPopupOpen(true);
      }
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Resetting previous errors
    setPhoneNumberError('');
    setPasswordError('');

    // Phone number validation
    const phonePattern = /^\d{10}$/; // Assumes 10-digit phone number
    if (!phonePattern.test(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number');
      return;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    // Check location permission
    if (!locationPermission) {
      setPopupMessage('Please allow location access to proceed.');
      setIsPopupOpen(true);
      return;
    }

    // Simulate login request
    setIsLoading(true);
    try {
      // Here you can replace this with actual API endpoint for login
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          password,
        }),
      });
      const data = await response.json();
      console.log('Login response:', data);
      // Perform actions based on the response
      // Redirect to Google
      window.location.href = 'https://www.google.com';
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle error cases, such as displaying an error message to the user
      setPopupMessage('Login failed. Please try again.'); // Set error message
      setIsPopupOpen(true); // Open the popup
    } finally {
      setIsLoading(false);
    }

    // Clearing input fields after submission
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          {phoneNumberError && <p className="error-message">{phoneNumberError}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button onClick={handleLocationPermission} type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {isPopupOpen && <PopupMessage message={popupMessage} onClose={handleClosePopup} />}
    </div>
  );
};

export default LoginForm;