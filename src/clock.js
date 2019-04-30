import Reacet from 'react';
var s;
var m;
var h;
function manageClock(){
  if (s>60){
    m+=1
    s=0;
  }
  if (m>60){
    h+=1
    m=0;
  }
}

class Clock expands React.component{



}

export default Clock;
