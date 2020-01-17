import React from 'react';
import Clock from  './clock';
import DiceRoller from './diceRoller';
import Players from './players';
import Overlay from './overlay';
import './App.css';

class App extends React.Component{
 render(){ return (
 	   <div>

  	     	<Clock />
  			<DiceRoller />
      		<Players />

	    </div>
	  );
	}
}

export default App;
