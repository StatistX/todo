import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({
  todos,
  onDeleteItem,
  onMakeDoneItem,
  onMakeImportant,
}) => {
  const todoItems = todos.map((item, idx) => (
    <TodoListItem
      key={item.id}
      label={item.label}
      done={item.done}
      important={item.important}
      onDeleteItem={() => onDeleteItem(idx)}
      onMakeDoneItem={() => onMakeDoneItem(idx)}
      onMakeImportant={() => onMakeImportant(idx)}
    />
  ));

  return (
    <div className='row'>
      {todoItems}
    </div>
  )
};

export default TodoList;