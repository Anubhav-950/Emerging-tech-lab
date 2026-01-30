import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Login = () => {
  return (
    <div className="cont">
      <div className="form sign-in">
        <h2>Log In</h2>
        <label>
          <span >Enter Mobile Number or Email</span>
          <input type="text" name="phone" required placeholder="email" />
        </label>
        <button className="submit" type="button" id="signInBtn">Continue To Login</button>
        <p className="forgot-pass">Forgot Password?</p>
        <div className="social-media">
          <ul>
            <li><img src="../images/google.png" alt="Google" /></li>
            <li><img src="../images/facebook.png" alt="Facebook" /></li>
            <li><img src="../images/whatsapp.png" alt="WhatsApp" /></li>
          </ul>
        </div>
        {/* New section for account creation */}
        <div className="create-account">
          <p>New to Caratlane? <Link to='/signup' target='_blank'><span className="link-create-account" id="createAccountBtn">Create an account</span></Link></p>
        </div>
      </div>
    </div>

  )
}

export default Login