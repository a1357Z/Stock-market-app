require('../config/mongoose')
const Stock = require('../model/stockModel')

const deleteItems = async (req,res)=>{
    try{
        console.log('req is',req.body);
        let deletedItem = await Stock.findOneAndDelete({_id : req.body._id})
        console.log('items deleted  is ',deletedItem);
        res.json({ data: deletedItem })
        res.end()
    }catch(e){
        console.log(e);
        res.json({ msg: "could not delete item" })
        res.end()
    }
   
}
module.exports = deleteItems