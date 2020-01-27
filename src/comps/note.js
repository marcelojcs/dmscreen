import React from 'react';
import coreFuncs from '../funcs/corefuncs'


var allNotes = coreFuncs.storage.init('notes');

class Note extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note: this.props.note,
            edit: false,
        }
        this.swapEdit = this.swapEdit.bind(this);
    }

    saveNote

    swapEdit(){

        let tmpEdit = this.state.edit;
        tmpEdit = !tmpEdit;
        this.setState({edit: tmpEdit})
    }

    saveNote(){
        let newNote = {
          title: this.refs.noteTtl.value,
          text: this.refs.noteTxt.value
        }
        this.setState({note: newNote});
        let newNotes=allNotes;
        newNotes[this.props.index]=this.state.note;
        localStorage.setItem('notes', JSON.stringfy(newNotes));
        this.swapEdit();


    }



    render(){
        return(()=>{
            if(!this.state.edit){
                return(
                    <div className='border border-dark'>
                      <div>
                        <h4>{this.state.note.title}</h4>
                      </div>
                        {this.state.note}
                        <div><button className='btn btn-dark' onClick={this.swapEdit}>Edit</button></div>
                    </div>
                    )
            }else{
              return(
                <div>
                  <div>
                    <input type="text" ref="noteTtl" default={this.state.note.title} />
                  </div>
                  <div>
                    <textarea ref='noteTxt'> {this.state.note.text} </textarea>
                  </div>
                    <button className='btn btn-dark' onClick={this.swapEdit}>Cancel</button>
                    <button className='btn btn-light' onClick={this.swapEdit}>Save</button>
                </div>
              )

            }
        })();
    }


}

export default Note;
