import Reacet from 'react';
var s = 0;
var m = 0;
var h = 0;
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
setInterval(() => {
  s++;
  manageClock();
  console.log(h+':'+m+':'+s);
}, 1000);
class Clock expands React.component{



}

export default Clock;
