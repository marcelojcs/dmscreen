import React from 'react';
var plyrs = localStorage.getItem('plyrs');
plyrs = JSON.parse(plyrs);
if (plyrs == null){
  plyrs = [];
  console.log("okay");;
}
class Players extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
    let newData ={
		    name: this.refs.newName.value,
        hp: this.refs.newHp.value,
        maxHp: this.refs.newMaxHp.value,
        ac: this.refs.newAc.value,
        str: this.refs.newStr.value,
        dex: this.refs.newDex.value,
        con: this.refs.newCon.value,
        int: this.refs.newInt.value,
        cha: this.refs.newCha.value,
        wis: this.refs.newWis.value,
		};
    this.state.plyrs.push(newData);
    localStorage.setItem('plyrs', JSON.stringify(this.state.plyrs));
    this.setState({ addNew: false});
 }
  render(){
    return(
      <div>
        <div>
        	{(()=>{let res =[];

             for(let x=0; x<this.state.plyrs.length; x ++){
               res.push(<div>
                 <b>Name: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].name} </span>
                 <b>HP: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].hp} </span>
                 <b>AC: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].ac} </span>
                 <b>STR: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].str} </span>
                 <b>DEX: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].dex} </span>
                 <b>CON: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].con} </span>
                 <b>INT: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].int} </span>
                 <b>CHA: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].cha} </span>
                 <b>WIS: </b> <span className="h5 border border-dark text-dark">{this.state.plyrs[x].wis} </span>
                 </div>);
             }
             return res;
           })()}
		</div>
		<div>
			{(()=>{
				if(!this.state.addNew){ return(<button className="btn btn-dark h2" onClick={this.openNewForm}>Add</button>);
				}else{
					return(<div>
            <div><b>Name: </b> <input type="text" ref="newName" /> </div>
            <div><b>HP: </b> <input type="number" ref="newHp" /> </div>
            <div><b>Max HP: </b> <input type="number" ref="newMaxHp" /> </div>
            <div><b>AC: </b> <input type="number" ref="newAc" /> </div>
            <div><b>STR: </b> <input type="number" ref="newStr" /> </div>
            <div><b>DEX: </b> <input type="number" ref="newDex" /> </div>
            <div><b>CON: </b> <input type="number" ref="newCon" /> </div>
            <div><b>INT: </b> <input type="number" ref="newInt" /> </div>
            <div><b>CHA: </b> <input type="number" ref="newCha" /> </div>
            <div><b>WIS: </b> <input type="number" ref="newWis" /> </div>
            <button className="btn btn-dark h2" onClick={this.handleNewForm}>Save</button>


            </div>);

				}
			})()}
		</div>
      </div>
    );
  }

}




export default Players;
