const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const goalSchema = moongose.Schema(
    {
    text:{
        type:String,
        required:[true,'Please Add A Text Value']
    },
   },
    {
        timestamps: true,
    }
    
)

module.exports= mongoose.model('Goal',goalSchema)