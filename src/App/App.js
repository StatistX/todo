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
		searchInputValue: '',
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

	onChangeSearchInputValue = (event) => {
		const value = event.target.value;
		this.setState(prevState => ({
			...prevState,
			searchInputValue: value
		}))
	}

	render() {
		const searchInputValue = this.state.searchInputValue.toLocaleLowerCase();
		const searchedTodoList = this.state.todos.filter(item => item.label
			.toLocaleLowerCase().includes(searchInputValue));
	
		const countToDo = this.state.todos.filter(item => !item.done).length;
		const countDone = this.state.todos.length - countToDo;

		return (
			<div className='container'>
				<Header
					countTodo={countToDo}
					countDone={countDone}
				/>
				<SearchPanel
					searchInputValue={searchInputValue}
					onChangeSearchInputValue={this.onChangeSearchInputValue}
					viewAllTodos={this.viewAllTodos}
					viewImportantTodos={this.viewImportantTodos}
				/>
				{searchedTodoList.length !== 0
				? <TodoList
						todos={searchedTodoList}
						onDeleteItem={this.onDeleteItem}
						onMakeDoneItem={this.onMakeDoneItem}
						onMakeImportant={this.onMakeImportant}
					/>
				: <div className='row'>Nothing to do</div>}
				<AddItemPanel
					addInputValue={this.state.addInputValue}
					onChangeAddItemValue={this.onChangeAddItemValue}
					onAddItem={this.onAddItem}
				/>
				{console.log(this.state)}
				{console.log(searchedTodoList)}
			</div>
		)
	}
};

export default App;