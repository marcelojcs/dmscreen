import React from 'react';
import Clock from  './clock'
import DiceRoller from './diceRoller';
import './App.css';

class App extends React.Component{
 render(){ return (
 	   <div>

  	     <Clock />
  		<DiceRoller />
	
	    </div>
	  );
	}
}

export default App;
