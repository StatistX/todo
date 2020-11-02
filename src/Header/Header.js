import React, { useState } from 'react';

const Header = ({
	countTodo,
	countDone,
}) => {
	return (
		<div className='row'>
			<div className=''>
				<span>Todo</span>
			</div>
			<div className=''>
			</div>
			<div className=''>
				<span>{countTodo} more to do, {countDone} done</span>
			</div>
		</div>
	)
};

export default Header;