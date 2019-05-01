import React from 'react';

function roll(die){	
	let result;
	result = Math.floor(Math.random()*die)+1;
	return result;

}
class DiceRoller extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rolls:'',
		}
		this.rollSingleDice=this.rollSingleDice.bind(this);
	}
	
	rollSingleDice(die){
		let curRolls = this.state.rolls
		this.setState({rolls : curRolls+"1d"+die+": "+roll(die)+", "});
	}
	
	render(){
		return(
			<div>
				<div className="border border-dark p-2 text-left text-dark">
					{this.state.rolls}
				</div>
					<button onClick={()=> this.rollSingleDice(4)} className="btn btn-alert h2">d4</button>
					<button onClick={()=> this.rollSingleDice(6)} className="btn btn-alert h2">d6</button>
					<button onClick={()=> this.rollSingleDice(8)} className="btn btn-alert h2">d8</button>
					<button onClick={()=> this.rollSingleDice(10)} className="btn btn-alert h2">d10</button>
					<button onClick={()=> this.rollSingleDice(12)} className="btn btn-alert h2">d12</button>
					<button onClick={()=> this.rollSingleDice(20)} className="btn btn-alert h2">d20</button>
					<button onClick={()=> this.rollSingleDice(100)} className="btn btn-alert h2">d100</button>
				<div>
					
				</div>
			</div>
		);
	}
	
}

export default DiceRoller