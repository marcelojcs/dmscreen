import React from 'react';
var plyrs = localStorage.getItem('plyrs');
class Players extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newPlayer:{
        name : "",
        hp: 0,
        maxHp: 0,
        ac: 0,
        dex : 0,
        con: 0,
        int: 0,
        cha: 0,
        wis : 0,
      },
      plyrs: plyrs,
      addNew: false,

    }
    this.handleNewForm = this.handleNewForm.bind(this);
  }
  handleNewForm(event){
    this.setState({plyrs: event.target.value});
    localStorage.setItem('plyrs', this.state.plyrs);
  }
  render(){
    return(
      <div>
              {this.state.plyrs}

      <div><input type="text" onChange={this.handleNewForm}/> <button clssName="bnt bnt-dark h2">Add</button> </div>
      </div>
    );
  }

}




export default Players;
