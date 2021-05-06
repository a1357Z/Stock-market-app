require('../config/mongoose')
const Stock = require('../model/stockModel')

const get =async (req,res)=>{
    try{
        let foundItems = await Stock.find({})
        console.log('items found is ',foundItems);
        res.json({ data: foundItems })
        res.end()
    }catch(e){
        console.log(e);
        res.json({ msg: "could not find items" })
        res.end()
    }
   
}
module.exports = get