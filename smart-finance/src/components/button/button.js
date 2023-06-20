import React from 'react';
import style from './button.module.css';
 
function Button(props) {
  return (
    <div className={style.button_wrapper}>
        <button className={props.disabled===true? style.disabled : style.button} onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

export default Button;
