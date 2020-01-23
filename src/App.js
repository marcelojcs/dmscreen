import React from 'react';
import Clock from  './comps/clock';
import DiceRoller from './comps/diceRoller';
import Players from './comps/players';
import Overlay from './comps/overlay';
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
