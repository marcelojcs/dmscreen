import React from 'react';
var note = localStorage.getItem('note');
class Notes extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			note : note,
			editing : false,
		}
	}


}


}