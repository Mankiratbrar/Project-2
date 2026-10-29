import mongoose from "mongoose"
import mongooseaggregatepaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type:String
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{timestamps:true})
videoSchema.plugin(mongooseaggregatepaginate)
export default mongoose.model("Video", videoSchema)