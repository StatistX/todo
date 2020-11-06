import React from 'react';

const SearchPanel = ({
  searchInputValue,
  onChangeSearchInputValue,
  viewAllTodos,
  viewImportantTodos
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
          onClick={viewAllTodos}
        >All</button>
        <button
          onClick={viewImportantTodos}
        >Important</button>
        <button>Done</button>
      </div>
    </div>
  )
};

export default SearchPanel;