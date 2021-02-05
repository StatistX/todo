import React from 'react';

const TodoListItem = ({
  label,
  onDeleteItem,
  onMakeDoneItem,
  done,
  onMakeImportant,
  important,
}) => {
  let doneOrImportantClasses = '';
  if (done) {
    doneOrImportantClasses += ' done';
  }

  if (important) {
    doneOrImportantClasses += ' important';
  }
  
  return (
    <div className='todo-list-item'>
      <div className=''>
        <span
          className={doneOrImportantClasses}
        >{label}</span>
      </div>
      <div className=''>
        <button
          className='list-item-button'
          onClick={onMakeImportant}
        >
          <i className='fa fa-exclamation'></i>
        </button>
        <button
          className='list-item-button'
          onClick={onDeleteItem}
        >
          <i className='fa fa-trash-o'></i>
        </button>
        <button
          className='list-item-button'
          onClick={onMakeDoneItem}
        >
          <i className='fa fa-check'></i>
        </button>
      </div>
    </div>
  )};

export default TodoListItem;

