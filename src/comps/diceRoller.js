import React from 'react';
import coreFuncs from '../funcs/corefuncs';

const roll = coreFuncs.dice.roll;
const validate = coreFuncs.dice.validate;
const validateMod = coreFuncs.dice.validateMod;


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
		this.clearRolls = this.clearRolls.bind(this);
	}
	clearRolls(){
		this.setState({rolls : []});
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

		if(validateMod(dieStr)){

				let op = "+";
				if (dieStr.indexOf(op) === -1){op="-"};
				let splt = dieStr.split(op);
				let theRoll = splt[0].split('d');
				let total = eval("0"+op+splt[1]);
				let rtrn = "Roll "+dieStr+": ";
				for(let n=0; n< theRoll[0]; n++){
					let x = roll(theRoll[1]);

					rtrn += x+" ";
					total += x;
				}
				let bRolls = this.state.rolls;
				bRolls.push(rtrn+''+op+" "+splt[1]+" = "+total);
				bRolls.push(<br/>);
				this.setState({rolls : bRolls});
				this.refs.rollInput.value = '';
			} else if(validate(dieStr)){


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
						this.refs.rollInput.value = '';
					}else {this.refs.rollInput.value = 'Invalid formula';
		}
	}

	render(){
		return(
			<div>
				<div className="border border-dark p-2 text-left text-dark text-bold">
					<b>{this.state.rolls}</b>
				</div>
				<div>
					<button onClick={()=> this.rollSingleDice(4)} className="btn btn-dark h2">d4</button>
					<button onClick={()=> this.rollSingleDice(6)} className="btn btn-dark h2">d6</button>
					<button onClick={()=> this.rollSingleDice(8)} className="btn btn-dark h2">d8</button>
					<button onClick={()=> this.rollSingleDice(10)} className="btn btn-dark h2">d10</button>
					<button onClick={()=> this.rollSingleDice(12)} className="btn btn-dark h2">d12</button>
					<button onClick={()=> this.rollSingleDice(20)} className="btn btn-dark h2">d20</button>
					<button onClick={()=> this.rollSingleDice(100)} className="btn btn-dark h2">d100</button>
				</div>
				<div>
					<input type="text" ref="rollInput" onChange={this.handleRollStr}/><button onClick={()=> this.rollStrDice(this.state.rollStr)} className="btn btn-dark h2">ROLL</button> <button onClick={this.clearRolls} className="btn h3">CLEAR</button>

				</div>
			</div>
		);
	}

}

export default DiceRoller
