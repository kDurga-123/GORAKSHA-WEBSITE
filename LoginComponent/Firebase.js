import { initializeApp } from 'firebase/app';
// Import 'getAuth', 'signInWithPhoneNumber', and 'RecaptchaVerifier' from 'firebase/auth'
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3b7wIL5LhYmObTWj3aygfx8qo76-g330",
      authDomain: "otp-code-d711b.firebaseapp.com",
      projectId: "otp-code-d711b",
      storageBucket: "otp-code-d711b.appspot.com",
      messagingSenderId: "52628492179",
      appId: "1:52628492179:web:fbab678cf7bce3927ee266"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 


