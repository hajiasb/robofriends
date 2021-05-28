import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
	<div className='tc pa2'>
		<input className='tc pa3 ba b--light purple bg-lightest-purple'
		type='search' 
		placeholder='Search robots'
		onChange={searchChange} />
	</div>
		);
}

export default SearchBox;