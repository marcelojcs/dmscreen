import React from 'react';

class Note extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            allNotes: this.props.allNotes,
            note: this.props.allNotes[this.props.index],
            edit: false,
        };
        this.swapEdit = this.swapEdit.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }


    swapEdit(){

        let tmpEdit = this.state.edit;
        tmpEdit = !tmpEdit;
        this.setState({edit: tmpEdit});
    }

    saveNote(){
        let newNote = {
          title: this.refs.noteTtl.value,
          text: this.refs.noteTxt.value
        };
        this.setState({note: newNote});
        let newNotes = this.props.allNotes;
        newNotes[this.props.index] = newNote;
        localStorage.setItem('notes',JSON.stringify(newNotes));
        this.swapEdit();



    }

    deleteNote(){
      let newNotes = this.props.allNotes;
      newNotes.splice(this.props.index, 1);
      localStorage.setItem('notes',JSON.stringify(newNotes));
      this.props.refresh();
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.allNotes !== this.props.allNotes){
        this.setState({
          allNotes: nextProps.allNotes,
          note: nextProps.allNotes[this.props.index]
        });

      }

    }

    render(){
        return((()=>{
            if(!this.state.edit){
                return(
                    <div className='border border-dark'>
                      <div>
                        <h4>{this.state.note.title}</h4>
                      </div>
                        <div>
                          {this.state.note.text}
                        </div>
                        <div>
                          <button className='btn btn-dark' onClick={this.swapEdit}>Edit</button>
                          <button className='btn' onClick={this.deleteNote}>Delete</button>
                          </div>
                    </div>
                    )
            }else{
              return(
                <div>
                  <div>
                    <input type="text" ref="noteTtl" defaultValue={this.state.note.title} />
                  </div>
                  <div>
                    <textarea ref='noteTxt' defaultValue={this.state.note.text}></textarea>
                  </div>
                    <button className='btn btn-dark'  onClick={this.swapEdit}>Cancel</button>
                    <button className='btn btn-light' onClick={()=>{this.saveNote(); this.props.refresh()}}>Save</button>
                </div>
              )

            }
        })());
    }


}

export default Note;
