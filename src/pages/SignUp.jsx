import React from 'react'
 import './style.css'

const SignUp = () => {
  return (
    
    <div className="cont">
    <div className="sub-cont">
    <div className="img">
      <div className="img-text m-up">
        <h2>New here?</h2>
        <p>Sign up and discover a great amount of new opportunities!</p>
      </div>
      <div className="img-text m-in">
        <h2>One of us?</h2>
        <p>If you already have an account, just sign in. We've missed you!</p>
      </div>
      <div className="img-btn">
        <span className="m-up">Sign Up</span>
        <span className="m-in">Sign In</span>
      </div>
    </div>
    <div className="form sign-up">
      <h2>Sign Up</h2>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" required />
      </label>
      <label>
        <span>Confirm Password</span>
        <input type="password" name="confirm-password" required />
      </label>
      <button type="button" className="submit" id="signUpBtn">Sign Up Now</button>
    </div>
    </div>
  </div>

  );
}

export default SignUp