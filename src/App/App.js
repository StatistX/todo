import React, { Component } from 'react';
import AddItemPanel from '../AddItemPanel/AddItemPanel';
import Header from '../Header/Header';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';

class App extends Component {

	state = {
		todos: [
			{ label: 'Drink Coffee', important: false, done: false, id: 1 },
			{ label: 'Make App', important: false, done: false, id: 2 },
			{ label: 'Eat Lunch', important: false, done: false, id: 3 },
		],
		addInputValue: '',
	}

	onChangeAddItemValue = (e) => {
		const value = e.target.value;
		this.setState(prevState => ({
			...prevState,
			addInputValue: value,
		}))
	}

	onAddItem = () => {
		if (this.state.addInputValue !== '') {
			const id = this.state.todos[this.state.todos.length - 1].id + 1;
			const newItem = {
				label: this.state.addInputValue,
				important: false,
				done: false,
				id: id,
			};
			this.setState(prevState => ({
				...prevState,
				todos: [
					...prevState.todos,
					newItem,
				],
				addInputValue: '',
			}))
		}
	}

	onDeleteItem = (ind) => {
		this.setState(prevState => ({
			...prevState,
			todos: [
				...prevState.todos.slice(0, ind),
				...prevState.todos.slice(ind + 1),
			]
		}));
	}

	onMakeDoneItem = (ind) => {
		this.setState(prevState => ({
			...prevState,
			todos: [
				...prevState.todos.slice(0, ind),
				{...prevState.todos[ind], done: !prevState.todos[ind].done},
				...prevState.todos.slice(ind + 1),
			]
		}));
	}

	onMakeImportant = (ind) => {
		this.setState(prevState => ({
			...prevState,
			todos: [
				...prevState.todos.slice(0, ind),
				{...prevState.todos[ind], important: !prevState.todos[ind].important},
				...prevState.todos.slice(ind + 1),
			]
		}));
	}

	render() {
		const countToDo = this.state.todos.filter(item => !item.done).length;
		const countDone = this.state.todos.length - countToDo;

		return (
			<div className='container'>
				<Header
					countTodo={countToDo}
					countDone={countDone}
				/>
				<SearchPanel />
				<TodoList
					todos={this.state.todos}
					onDeleteItem={this.onDeleteItem}
					onMakeDoneItem={this.onMakeDoneItem}
					onMakeImportant={this.onMakeImportant}
				/>
				<AddItemPanel
					addInputValue={this.state.addInputValue}
					onChangeAddItemValue={this.onChangeAddItemValue}
					onAddItem={this.onAddItem}
				/>
				{console.log(this.state)}
			</div>
		)
	}
};

export default App;