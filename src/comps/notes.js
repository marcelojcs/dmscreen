import React from 'react';
import Note from './note';
import coreFuncs from '../funcs/corefuncs';

var notes = coreFuncs.storage.init('notes');

class Notes extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			notes : notes,
		};
		this.saveNote = this.saveNote.bind(this);
		this.refreshNotes = this.refreshNotes.bind(this);
	}

	saveNote(){
		let newNotes = this.state.notes;
		newNotes.push({
				title: this.refs.noteTtl.value,
				text: this.refs.noteText.value
		});
		this.setState({notes: newNotes});
		localStorage.setItem('notes',JSON.stringify(this.state.notes));
		this.refs.noteText.value = 'New Note';
		this.refs.noteTtl.value = 'Note Title';

	}

	refreshNotes(){
		this.setState({notes: JSON.parse(localStorage.getItem('notes'))});
		this.forceUpdate();

	}

	render(){

		return(
			<div>
				<div>	{(()=>{
						let res = [];
						let count = 0;
						for(let note of this.state.notes){
							res.push(<Note allNotes={this.state.notes} refresh={this.refreshNotes} index={count} key={count} />);
							count ++;

					}
					return res;

				})()}
			</div>
			<div>
				<input type="text" ref="noteTtl" defaultValue="Note Title" />
			</div>
				<textarea ref="noteText">
					New Note
				</textarea>
				<div>
					<button className='btn btn-dark' onClick={this.saveNote}>Save</button>
			</div>
		</div>
		)
	}

}

export default Notes;
