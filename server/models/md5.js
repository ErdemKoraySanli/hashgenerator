import mongoose from "mongoose"

const md5Schema = mongoose.Schema({
    text: {type: String,required:true},
    hash:{type: String,required:true},
    createdAt:{
        type: Date,
        default:new Date(),
    },
});

const md5 = mongoose.model("md5",md5Schema);

export default md5;