import React from 'react';
var s = 0;
var m = 0;
var h = 0;
function manageClock(){
  if (s>59){
    m+=1
    s=0;
  }
  if (m>59){
    h+=1
    m=0;
  }
}
setInterval(() => {
  s++;
  manageClock();
  console.log(h+':'+m+':'+s);
}, 1000);
class Clock extends React.Component{

	render(){
		return(
			 <div className="jumbotron">
		
				{h+':'+m+':'+s}

			</div>
		);
	}


}

export default Clock;
