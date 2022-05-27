const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const goalSchema = moongose.Schema(
    {
    user :{
     type:moongose.Schema.Types.ObjectId,
     required:true,
     ref:'User'
    },
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