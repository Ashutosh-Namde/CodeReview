const aiServices = require("../services/ai.service")


module.exports.getResponse = async(req,res)=>{
    const code = req.body.code
    if(!code){
        return  res.status(401).json({message:"prompt is require"})
    }

    const response = await aiServices(code)
    res.send(response)
}