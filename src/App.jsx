import SuccessBox from '../component/successBox';
import './App.css';

import desktopImage from '../assets/images/illustration-sign-up-desktop.svg';
import tickIcon from '../assets/images/icon-list.svg';
import { useState } from 'react';

function App() {

  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.text.value; 
    if (validateEmail(email)) {
      setEmail(email);
      setSuccess(true);
      setInputError(false); // Reset error if validation passes
    } else {
      setSuccess(false);
      setInputError(true); // Set error if validation fails
    }
  }

  return (
    <div className="body">

      {!success? (

        <div className="signUp-Container">

        <div className="content-section">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <div className="lists">
            <div className="list">
              <img src={tickIcon} alt="Tick icon" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="list">
              <img src={tickIcon} alt="Tick icon" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="list">
              <img src={tickIcon} alt="Tick icon" />
              <p>And much more!</p>
            </div>
          </div>

          <div className='email-Section'>
            <form onSubmit={handleSubmit}>
              <label htmlFor="text">Email address</label>
              <input
                type="text"
                name="text"
                id="email"
                placeholder='email@company.com'
                className={inputError ? "errorEmail" : "successEmail"}
              />
              <button type='submit'>Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>

        <div className="image-section">
          <img src={desktopImage} alt="Desktop illustration" />
        </div>

      </div>
      ):(
        <SuccessBox email={email} setSuccess={setSuccess}/>
      )}
      
    </div>
  );
}

export default App;
