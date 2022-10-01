let date = new Date();
let Hour = date.getHours();
let day =date.getDay();

function log(req,res,next){
    if(Hour > 8 && Hour < 24 && day > 0 && day < 7){
        next()
    }else{
        res.send('<h1>Closed Now !!!</h1>')
    }
}

module.exports = log;