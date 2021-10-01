import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		axios.get('http://localhost:3001/name').then((response) => {
			setNotes(response.data);
		});
	}, []);

	const handleFilter = (e) => {
		// console.log(setFilter('data, e.target.value'));
		setFilter(e.target.value);
	};

	const countries = notes.map((names) => names.name);
	const getCountry = notes.map((info) => info.capital);
	// console.log(`$${countries}`);

	const filteredCountries = countries.filter(
		(country) =>
			country.common.toUpperCase().indexOf(filter.toUpperCase()) !== -1
	);
	// console.log(`$${filteredCountries}`);
	const matchedCountries = filteredCountries.length;

	return (
		<div>
			<h1>Country data</h1>
			<p>search country by name</p>
			<input
				type='text'
				placeholder='Enter country name'
				onChange={handleFilter}
			/>
			<h3>filter result: {filter}</h3>
			{/* <p>matched {matchedCountries}</p> */}
			<ul>
				{}
				{matchedCountries === 1
					? filteredCountries.map(
							(data) => (
								<div key='data.id'>
									<h2>{data.common}</h2>
									<p>c - {getCountry}</p>
								</div>
							)
							//
					  )
					: matchedCountries < 10
					? filteredCountries.map((names) => (
							<li key={names.common}>{names.common}</li>
					  ))
					: 'Too many matches, specify another query'}
			</ul>
		</div>
	);
};

export default App;
