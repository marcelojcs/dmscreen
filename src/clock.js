import React from 'react';


const appendZero = (num) => {

  if (num < 10){
    return ('0'+num);
  }else{
    return (num)

  }
}



var s = 0;
var m = 0;
var h = 0;

function manageClock(){
  if (s>59){
    m+=1;
    s=0;
  }
  if (m>59){
    h+=1;
    m=0;
  }
}
/*function ticker(){

  setInterval(() => {
    s++;
    manageClock();
    console.log(h+':'+m+':'+s);
  }, 1000);

}*/
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      s:s,
      m:m,
      h:h,
      intervalID:null,
    }

    this.mountTimer=this.mountTimer.bind(this);
    this.handleTimer=this.handleTimer.bind(this);
  }

  mountTimer(){
    if (this.state.intervalID === null){
      console.log('ini')
      var intervalID = setInterval(this.handleTimer, 1000);
      this.setState({intervalID: intervalID});
    }
  }
  handleTimer(){
      s+=1;
      manageClock();
      this.setState({s:s});
      this.setState({m:m});
      this.setState({h:h});
  }

	render(){
		return(
      <div>
			 <div className="h1 p-3 bg-dark text-white">
				   {appendZero(this.state.h)+':'+appendZero(this.state.m)+':'+appendZero(this.state.s)}
        </div>
        <button className="btn" onClick={this.mountTimer}>START</button>

    	</div>
		);
	}


}

export default Clock;
