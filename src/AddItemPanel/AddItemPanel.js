import React from 'react';

const AddItemPanel = ({
  addInputValue,
  onAddItem,
  onChangeAddItemValue,
}) => {
  return (
    <div className='row'>
      <div>
        <input
          type='text'
          placeholder='What you need to do?'
          value={addInputValue}
          onChange={onChangeAddItemValue}
        />
      </div>
      <div>
        <button
          type='button'
          onClick={onAddItem}
        >
          Add ToDo
        </button>
      </div>
    </div>
  )
};

export default AddItemPanel;