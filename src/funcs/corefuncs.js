const coreFuncs = {
    rollDie:(die)=>{
            let result;
            result = Math.floor(Math.random()*die)+1;
            return result;
    }, 

}

export default coreFuncs;