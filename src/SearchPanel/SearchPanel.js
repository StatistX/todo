import React from 'react';

const SearchPanel = () => {
  return (
    <div className='row'>
      <div className=''>
        <input
          type='text'
          placeholder='Search to do'
        />
      </div>
      <div className=''>
        <button className=''>All</button>
        <button className=''>Important</button>
        <button className=''>Done</button>
      </div>
    </div>
  )
};

export default SearchPanel;