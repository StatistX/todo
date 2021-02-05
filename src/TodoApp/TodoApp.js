import React, { Component } from 'react';
import AddItemPanel from './AddItemPanel/AddItemPanel';
import Header from './Header/Header';
import Modal from '../Modal/Modal';
import SearchPanel from './SearchPanel/SearchPanel';
import TodoList from './TodoList/TodoList';

class TodoApp extends Component {

	state = {
		todos: [
			{ label: 'Drink Coffee', important: false, done: false, id: 1 },
			{ label: 'Make App', important: false, done: false, id: 2 },
			{ label: 'Eat Lunch', important: false, done: false, id: 3 },
		],
		addInputValue: '',
		searchInputValue: '',
		filter: 'all',
		showModal: false,
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
		this.setState({
			searchInputValue: event.target.value
		})
	}

	changeFilter = (filter) => {
		this.setState({
			filter
		})
	}

	viewFilteredTodos = (filter, todos) => {
		switch(filter) {
			case 'all':
				return todos;
			case 'important':
				return todos.filter(item => item.important);
			case 'done':
				return todos.filter(item => item.done);
			default:
				return todos;
		}
	}

	onShowModal = () => {
		this.setState(prevState => ({
			showModal: !prevState.showModal
		}))
	}

	render() {
		const filteredTodos = this.viewFilteredTodos(this.state.filter, this.state.todos);

		const searchInputValue = this.state.searchInputValue.toLocaleLowerCase();
		const searchedTodoList = filteredTodos.filter(item => item.label
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
					changeFilter={this.changeFilter}
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
				<button onClick={this.onShowModal}>Show modal</button>
				{this.state.showModal && <Modal onShowModal={this.onShowModal}/>}
			</div>
		)
	}
};

export default TodoApp;