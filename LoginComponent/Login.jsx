import React, { useState, useEffect } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Login.css';

const firebaseConfig = {
apiKey: "AIzaSyC3b7wIL5LhYmObTWj3aygfx8qo76-g330",
  authDomain: "otp-code-d711b.firebaseapp.com",
  projectId: "otp-code-d711b",
  storageBucket: "otp-code-d711b.appspot.com",
  messagingSenderId: "52628492179",
  appId: "1:52628492179:web:fbab678cf7bce3927ee266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [resendToken, setResendToken] = useState(null);

  useEffect(() => {
    // Clear the resend token on component unmount
    return () => {
      clearTimeout(resendToken);
    };
  }, [resendToken]);

  const checkIfUserExists = async (phoneNumber) => {
    try {
      const response = await fetch(`/api/checkUserExists/${phoneNumber}`);
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return false;
    }
  };

  const getOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (!phoneNumber || !firstName || !lastName) {
      return setError('Please enter valid information');
    }

    try {
      const userExists = await checkIfUserExists(phoneNumber);

      if (userExists) {
        return setError('User with this phone number already exists. Please login instead.');
      }

      // Ensure the cleaned phone number is in the correct format
      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

      // Log the cleaned and formatted phone numbers for debugging
      console.log('Cleaned Phone Number:', cleanedPhoneNumber);
      const formattedPhoneNumber = `+${cleanedPhoneNumber}`;
      console.log('Formatted Phone Number:', formattedPhoneNumber);

      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container-send', {
        'callback': (response) => {
          console.log("Prepared phone auth process");
        }
      });

      const result = await signInWithPhoneNumber(auth, formattedPhoneNumber, verifier);

      console.log("Authentication process ready. Result:", result);

      setConfirmationResult(result);

      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('phoneNumber', phoneNumber);

      // Set the resend token for handling OTP expiration
      setResendToken(setTimeout(() => {
        setError('OTP has expired. Please resend.');
        setConfirmationResult(null);
      }, 120000)); // Adjust the expiration time (in milliseconds) as needed
    } catch (err) {
      setError(err.message);
      console.error("Authentication error:", err);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (confirmationResult) {
        clearTimeout(resendToken); // Clear the resend token

        const verifier = new RecaptchaVerifier(auth, 'recaptcha-container-verify', { size: 'invisible' });

        const userCredential = await confirmationResult.confirm(otp, verifier);

        const user = userCredential.user;
        console.log("User authenticated:", user);

        // Show success alert
        alert("Login successful!");

        // Redirect to the main home page
        // Replace "/main-home" with your actual home page path
      } else {
        setError("Confirmation result is not available. Please request OTP again.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="optimize">
      <br/>
      <br/>
      <div className="form-container">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} className="auth-form">
          <Form.Group controlId="formBasicFirstName">
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhoneNumber">
            <PhoneInput
              country={'us'} // Default country (you can change it based on your preference)
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value)}
              inputStyle={{
                width: '100%',
              }}
              containerStyle={{
                width: '100%',
              }}
              inputProps={{
                autoComplete: 'off',
              }}
              inputClass="form-input"
            />
          </Form.Group>
          <Link to="/">
            <Button variant="secondary" className="form-btn">Cancel</Button>
          </Link>
          <Button variant="primary" type="submit" className="form-btn" >
            Send OTP
          </Button>
        </Form>

        <Form onSubmit={verifyOtp} className="auth-form">
          <Form.Group controlId="formBasicOTP">
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-input"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="form-btn">
            Verify OTP
          </Button>
        </Form>
      </div>
      <div id="recaptcha-container-send"></div>
      <div id="recaptcha-container-verify"></div>
      </div>
      <Footer />

    </>

  );
}

export default Login;
