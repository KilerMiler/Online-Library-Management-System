// SignInComponent.js
import React from 'react';
import './stl.css';

const SignInComponent = () => {
  return (
    <div className="container">
      <form>
        <label htmlFor="name"><b>Name</b></label>
        <input type="text" placeholder="Enter Name" name="name" required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required />

        <label htmlFor="phone"><b>Phone Number</b></label>
        <input type="tel" placeholder="Enter Phone Number" name="phone" required />

        <label htmlFor="purpose"><b>Purpose of Visit</b></label>
        <input type="text" placeholder="Enter Purpose of Visit" name="purpose" required />

        <button type="button" onClick={() => displayMessage()}>Submit</button>
      </form>
      <p id="message" className="message"></p>
    </div>
  );

  function displayMessage() {
    document.getElementById("message").innerHTML = "It's done! Thanks for the visit";
  }
};

export default SignInComponent;