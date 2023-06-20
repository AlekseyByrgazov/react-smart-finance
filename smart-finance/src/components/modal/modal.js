import React, { useState } from 'react';
import './modal.css';
import InputText from '../inputs/inputText';
import Button from '../button/button';


function Modal({ active, setActive }) {

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  
  function getLogin (value) {
    setLogin(value)
  }
  function getPassword (value) {
    setPassword(value)
  }


  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <div className="auth__closed">
          <svg width="15" height="15" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setActive(false)}>
            <line x1="1" y1="-1" x2="19.5187" y2="-1" transform="matrix(0.682337 0.731037 -0.682337 0.731037 0 2)" stroke="#2B2F3C" stroke-width="2" stroke-linecap="round" />
            <line x1="1" y1="-1" x2="19.5187" y2="-1" transform="matrix(0.682337 -0.731037 0.682337 0.731037 0.999283 16.9999)" stroke="#2B2F3C" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <div className="auth__header">Authorization</div>
        <form className="auth__form">
          <InputText
            placeholder="Admin"
            id="Admin"
            htmlFor="Admin"
            type="text"
            getLogin = {getLogin}
          />
          <InputText
            placeholder="Password"
            id="Password"
            htmlFor="Password"
            type="password"
            getPassword = {getPassword}
          />
          <div className="checkbox">
            <label className="checkbox__label">
              <input type="checkbox" className="checkbox__input" />
              <span className="checkbox__fake"></span>
              <span className="checkbox__text">Remember me on next login</span>
            </label>
          </div>

          <div className="auth__btn">
            <Button
              text="Sign In"
              disabled = {login && password ? false : true}
            />
          </div>
        </form>


      </div>

    </div>
  );
}

export default Modal;

