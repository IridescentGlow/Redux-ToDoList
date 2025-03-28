import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './pages/AddToDoForm';
import TodoList from './pages/ToDoList';
import TotalCompleteItems from './pages/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;