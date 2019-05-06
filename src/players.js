import React from 'react';
var plyrs = localStorage.getItem('plyrs');
plyrs = JSON.parse(plyrs);
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
    this.openNewForm = this.openNewForm.bind(this);
  }
  openNewForm(){
	this.setState({addNew : true})
	}
  handleNewForm(){
  	let newPlyr = this.state.newPlayer;
    this.setState({newPlayer: {
		name: this.refs.newName.vlaue,
        hp: this.refs.newHp.vlaue,
        maxHp: this.refs.newMaxHp.vlaue,
        ac: this.refs.newAc.vlaue,
        dex: this.refs.newDex.vlaue,
        con: this.refs.newCon.vlaue,
        int: this.refs.newInt.vlaue,
        cha: this.refs.newCha.vlaue,
        wis: this.refs.newWis.vlaue,
		}});
    this.state.plyrs.push(this.state.newPlayer);
    localStorage.setItem('plyrs', JSON.stringfy(this.state.plyrs));
	this.setState({newPlayer: newPlyr});
    this.setState({ addNew: false});
 }
  render(){
    return(
      <div>
        <div>
        	{(()=>{return("fill me later");})()}
		</div>
		<div>
			{(()=>{
				if(!this.state.addNew){ return(<button className="btn btn-dark h2" onClick={this.openNewForm}>Add</button>);
				}else{
					return(<div>Hahahahahah</div>);
					
				}
			})()}
		</div>
      </div>
    );
  }

}




export default Players;
