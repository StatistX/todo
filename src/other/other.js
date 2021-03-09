import React, { useState } from 'react';

const Other = () => {

  const strings = [
    'Введение в хуки',
    'Хуки — нововведение в React 16.8',
    'позволяет использовать состояние',
    'Первый хук, который мы изучим, это функция useState',
    'Вы можете начать изучать хуки',
    'React 16.8.0 это первый релиз, поддерживающий хуки',
    'На конференции React Conf 2018',
  ];

  const getRandomStr = (arr) => {
    const randInd = Math.floor(Math.random() * arr.length);
    return arr[randInd];
  };

  const [ randomStr, setRandomStr ] = useState('');

  return (
    <div>
      <button
        onClick={() => {
          setRandomStr(getRandomStr(strings));
        }}
      >
        Random string
      </button>
      <span>
        {randomStr}
      </span>

      <form>
        <label>
          Поиск
          <input
            type='text'
          >
          </input>
        </label>
        
        <button>
          Search
        </button>
      </form>
    </div>
  )
};

export default Other;