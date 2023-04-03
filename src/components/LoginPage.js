import React from "react";
import { useState } from 'react';

function LoginPage () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin() {
        alert(`Welcome ${username}! You have successfully logged in.`);
      }
    return (
        <div class="hero">
        <div class="form-box left">
            <div class="info">
            <img className="icon" src="https://img.icons8.com/ios/1x/user--v3.gif" alt="click to go back to home"></img>
            <br />
                <h2>Pelicula</h2>
                <div class="contact-info">
                    <p>P.O box 300 - 00100,</p>
                    <p>Nairobi,</p>
                    <p>Kenya</p>
                </div>
                <div class="icons">
                    <div class="contact">
                        <i class="fas fa-phone"></i>
                        <p>Tel:+254 00000000</p>
                    </div>
                    <div class="contact">
                        <i class="fas fa-envelope"></i>
                        <p>Email: support@Pelicula.com</p>
                    </div>
                </div>
                <div class="navigation">
                <img className="icon" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/1x/external-home-user-interface-tanah-basah-glyph-tanah-basah.png" alt="contact us with these numbers"></img>
                <br/>
                <br/>
                    <a href="./HomePage">Back to home</a>
                    <i class="fas fa-arrow-left"></i>
                </div>
            </div>
        </div>
        <div class="form-box right">
        <h2>Sign up</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign up</button>
      </form>
        </div>
    </div>
    );
}
export default LoginPage;