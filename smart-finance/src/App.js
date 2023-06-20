import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Button from './components/button/button';
import Card from './components/card/card';
import Modal from './components/modal/modal';


function App() {

  const [data, setData] = useState([]); // стейт, где мы будем хранить полученные данные
  const [lastIndex, setLastIndex] = useState(2); // индекс последней показанной карточки
  const [modalActive, setModalActive] = useState(true) // стейт видимости модалки

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        setData(data); 
      // сохраняем полученные данные в стейте
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleMoreCards = () => {
    // увеличиваем индекс последней показанной карточки на 3
    setLastIndex(lastIndex + 3);
    console.log('click')
  }

  const handleHideCards = ()=> {
    // спрятать все открытые карточки
    setLastIndex(2)
    console.log ('click')
  }

  return (
    <div className={style.app}>
      <div className={style.app_wrapper}>
        <h2 className={style.header}>
          <Button
            text="Sign In"
            onClick = {() => {setModalActive(true)}}
          />
          <Button
            text="Hide cards"
            onClick = {handleHideCards}
          />
        </h2>
        <div className={style.card_conteiner}>
          <div className={style.cards}>
             {/* выводим карточки с индексами от 0 до lastIndex  */}
            {data.slice(0, lastIndex + 1).map((value, index) => {
              return <Card
                email={value.email}
                description = {value.body}
                key={index}
              />
            })}
          </div>
          {/* выводим кнопку "More", если есть еще карточки для показа */}
          <div className={style.btn_wrapper}>
            {lastIndex < data.length - 1 && <Button text="More..." onClick={handleMoreCards} />}
          </div>
        </div>
      </div>
      <Modal
        active = {modalActive}
        setActive = {setModalActive}
      />
    </div>
  );
}

export default App;