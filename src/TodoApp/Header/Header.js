import React from 'react';

const Header = ({
	countTodo,
	countDone,
}) => {
	return (
		<div className='row'>
			<div>
				<span>Todo</span>
			</div>
			<div>
				<span>{countTodo} more to do, {countDone} done</span>
			</div>
		</div>
	)
};

export default Header;