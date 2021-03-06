import React from 'react'

import './Form.css'

function Form(props) {
	return (
		<form onSubmit={e => {props.handleSubmit(e)}}>
			<label htmlFor='search'>Search: </label>
			<input type='text' id='search' required
				value={props.query}
				onChange={e => {props.searchChanged(e.target.value)}}
			/>
			<label htmlFor='filter'>Filter: </label>
			<select id='filter'
				value={props.filter}
				onChange={e => {props.filterChanged(e.target.value)}}
			>
				<option value='people'>Characters</option>
				<option value='starships'>Starships</option>
				<option value='vehicles'>Vehicles</option>
				<option value='planets'>Planets</option>
				<option value='species'>Species</option>
				<option value='films'>Films</option>
			</select>
			<input className='btn-sub' type='submit' value='Submit' />
		</form>
	)
}

export default Form;