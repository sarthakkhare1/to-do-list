const mongoose=require('mongoose');
const listSchema=new mongoose.Schema({
    Todo:
    {
        type:String,
        required: true
    },
    Category:
    {
        type:String,
        required :true
    },
    Date:
    {
        type:String,
        required:true
    }
},{
    timestamps:true
});

const List=mongoose.model("List",listSchema);
module.exports=List;