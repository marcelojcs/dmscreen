const coreFuncs = {
    dice:{
        roll:(die)=>{
            let result;
            result = Math.floor(Math.random()*die)+1;
            return result;
        }, 
        validate:(str)=>{
            let r = /(\d{1,3})d(4|6|8|10|12|20|100)$/;
            return r.test(str);
        },
        validateMod: (str)=>{
            let r = /\b(\d{1,3})d(4|6|8|10|12|20|100)(\+|\-)(\d{1,3})\b/;
            return r.test(str);
        },


    },

    storage:{
        init:(tag)=>{
            let item = localStorage.getItem(tag);
            if(item === null){item = []}
            else{ item = JSON.parse(item)};
            return(item);
        },
    }

}

export default coreFuncs;