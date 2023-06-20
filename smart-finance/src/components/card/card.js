import React from 'react';
import style from './card.module.css';
import Button from '../button/button';


function Card(props) {

  function getRandomNum (min, max) {
    return Math.floor(Math.random()*(max-min))+min;
  }

  return (
    <div className={style.card}>
      <div className={style.description}>{props.description}</div>
      <div className={style.card_previev}>
        <div className={style.review_info}>
          <div className={style.user_email}>{props.email.toUpperCase()}</div>
          <div className={style.raiting}>
            <div className={style.points}>{getRandomNum(1,5)}</div>
            <div className={style.svg_wrapper}>
              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9428 0L15.8743 9.12098H25.3609L17.6861 14.758L20.6176 23.879L12.9428 18.242L5.26789 23.879L8.19943 14.758L0.524566 9.12098H10.0112L12.9428 0Z" fill="#FFDA58" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={style.button_card}><Button text = "Visit comment"/></div>
    </div>
  );
}

export default Card;
