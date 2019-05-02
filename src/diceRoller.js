import React from 'react';

function roll(die){
	let result;
	result = Math.floor(Math.random()*die)+1;
	return result;

}
var multiRollMod = /(\d{1,3})d(\d{1,3})(\+|\-)(\d{1,3})/g;
var multiRoll = /(\d{1,3})d(\d{1,3})/g;

class DiceRoller extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rolls:[],
			rollStr: "",

		}
		this.rollSingleDice=this.rollSingleDice.bind(this);
		this.handleRollStr=this.handleRollStr.bind(this);
		this.rollStrDice=this.rollStrDice.bind(this);
	}
	handleRollStr(event){
		this.setState({rollStr: event.target.value});
	}
	rollSingleDice(die){
		let curRolls = this.state.rolls;
		curRolls.push("Roll d"+die+": "+roll(die));
		curRolls.push(<br/>);
		this.setState({rolls : curRolls});
	}

	rollStrDice(dieStr){
			if(multiRoll.test(dieStr)){
				let theRoll = dieStr.split('d');
				let total = 0;
				let rtrn = "Roll "+dieStr+": ";
				for(let n=0; n< theRoll[0]; n++){
					let x = roll(theRoll[1]);
					rtrn += x+" ";
					total += x;
				}
				let bRolls = this.state.rolls;
				bRolls.push(rtrn+" = "+total);
				bRolls.push(<br/>);
				this.setState({rolls : bRolls});
			} 
			else if(multiRollMod.test(dieStr)){
				console.log("valid formula");
				let op = "+";
				if (dieStr.indexOf(op) === -1){op="-"}
				console.log("operator "+op);
				let splt = dieStr.split(op);
				console.log("split "+splt);
				let theRoll = splt[0].split('d');
				console.log("roll " +theRoll);
				let total = eval("0"+op+splt[1]);
				let rtrn = "Roll "+dieStr+": ";
				for(let n=0; n< theRoll[0]; n++){
					let x = roll(theRoll[1]);
					rtrn += x+" ";
					total += x;
				}
				let bRolls = this.state.rolls;
				bRolls.push(rtrn+op+" "+splt[1]+" = "+total);
				bRolls.push(<br/>);
				this.setState({rolls : bRolls});
		}
	}

	render(){
		return(
			<div>
				<div className="border border-dark p-2 text-left text-dark text-bold">
					<b>{this.state.rolls}</b>
				</div>
				<div>
					<button onClick={()=> this.rollSingleDice(4)} className="btn btn-warning h2">d4</button>
					<button onClick={()=> this.rollSingleDice(6)} className="btn btn-warning h2">d6</button>
					<button onClick={()=> this.rollSingleDice(8)} className="btn btn-warning h2">d8</button>
					<button onClick={()=> this.rollSingleDice(10)} className="btn btn-warning h2">d10</button>
					<button onClick={()=> this.rollSingleDice(12)} className="btn btn-warning h2">d12</button>
					<button onClick={()=> this.rollSingleDice(20)} className="btn btn-warning h2">d20</button>
					<button onClick={()=> this.rollSingleDice(100)} className="btn btn-warning h2">d100</button>
				</div>
				<div>
					<input type="text" onChange={this.handleRollStr}/><button onClick={()=> this.rollStrDice(this.state.rollStr)} className="btn btn-warning h2">ROLL</button>

				</div>
			</div>
		);
	}

}

export default DiceRoller
