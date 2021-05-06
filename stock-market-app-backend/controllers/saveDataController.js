require('../config/mongoose')
const Stock = require('../model/stockModel')

const save =async (req,res)=>{

    let existingItem;
    try{
        existingItem = await Stock.findOne({symbol : req.body.symbol})
    }catch(e){
        console.log(e);
    }
    if(existingItem){
        return res.send({message : 'item already existing in database'})
    }

    try{
        let savedItem = await Stock.create(req.body)
        console.log('item saved is ',savedItem);
        res.json({ msg: "successfully saved" })
        res.end()
    }catch(e){
        console.log(e);
        res.json({ msg: "could not save" })
        res.end()
    }
   
}
module.exports = save