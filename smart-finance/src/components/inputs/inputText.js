import React, { useEffect, useState } from 'react';
import style from "./inputText.module.css"

function InputText(props) {
  const [value, setValue] = useState();
  useEffect(() => {
    if (props.getLogin) {
      const loginValue = props.getLogin(value);
    }
  
    if (props.getPassword) {
      const passwordValue = props.getPassword(value);
    }
  }, [value]);

  return (
    <div className={style.input_wrapper}>
      <input
        id={props.id}
        type={props.type}
        placeholder="  "
        autoComplete='off' 
        onChange = {e=>setValue(e.target.value)}
        />
      <label htmlFor={props.htmlFor}>{props.placeholder}</label>
    </div>
  );
}

export default InputText;

