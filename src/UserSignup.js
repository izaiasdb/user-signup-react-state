import React, { useState } from 'react';

import './UserSignup.css';

const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  investmentInterest: false
};

const UserSignup = () => {
  // const [userName, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const [investmentInterest, setInvestmentInterest] = useState(false);
  const [state, setState] = useState(initialState)

  const handleSubmit = event => {
    event.preventDefault();
    clear();
  };

  const handleChange = event => {
    setState({
      [event.target.name]: event.target.value
    });
  };

  const clear = () => {
    setState(initialState)
    // setUserName('');
    // setEmail('');
    // setPassword('');
    // setPasswordConfirmation('');
    // setInvestmentInterest(false);
  };

  return (
    <form className="UserSignup" onSubmit={handleSubmit}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        //value={userName}
        value={state.userName}
        required
        // onChange={event => {
        //   setUserName(event.target.value);
        // }}
        onChange={handleChange}        
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        // value={email}
        value={state.email}
        required
        // onChange={event => {
        //   setEmail(event.target.value);
        // }}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        // value={password}
        value={state.password}        
        required
        // onChange={event => {
        //   setPassword(event.target.value);
        // }}
        onChange={handleChange}
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        // value={passwordConfirmation}
        value={state.passwordConfirmation}
        required
        // onChange={event => {
        //   setPasswordConfirmation(event.target.value);
        // }}
        onChange={handleChange}
      />
      <label htmlFor="investmentInterest" className="UserSignup--checkbox">
        <input
          id="investmentInterest"
          name="investmentInterest"
          type="checkbox"
          //checked={investmentInterest}
          checked={state.investmentInterest}
          //onChange={event => setInvestmentInterest(event.target.checked)}
          onChange={event => 
            setState({investmentInterest : !event.target.checked})
          }
        />
        Do you want to maybe help us out with an angel investment?
      </label>
      <input type="Submit" />
    </form>
  );
};

export default UserSignup;
