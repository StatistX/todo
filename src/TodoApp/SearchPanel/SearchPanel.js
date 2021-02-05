import React from 'react';

const SearchPanel = ({
  searchInputValue,
  onChangeSearchInputValue,
  changeFilter
}) => {
  return (
    <div className='row'>
      <div>
        <input
          type='text'
          placeholder='Search to do'
          value={searchInputValue}
          onChange={onChangeSearchInputValue}
        />
      </div>
      <div>
        <button
          onClick={() => changeFilter('all')}
        >All</button>
        <button
          onClick={() => changeFilter('important')}
        >Important</button>
        <button
          onClick={() => changeFilter('done')}
        >Done</button>
      </div>
    </div>
  )
};

export default SearchPanel;