import React from 'react';

const FilmListeHeader = (props) => {
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default FilmListeHeader;