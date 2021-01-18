const List=require("../models/task");

//accessing home page
module.exports.home= async function(req,res)
{
    try
    {
        let Lists=await List.find({});
        return res.render("todo",{app_list:Lists});
    
    }
    catch(err)
    {
        console.log("error in rendering home ",err);
        return;
    }
    
}

//creating a list
module.exports.create_post=function(req,res)
{
    console.log(req.body);
    // adding to the database
    List.create({
            Todo:req.body.todo,
            Date:req.body.date,
            Category:req.body.category
        },function(err, newEvent){
            if(err){console.log(err);
                return;}
                console.log('******',newEvent);
                return res.redirect('back');

        });

}
// was also trying to create using ajax but something did'nt work will add later 
module.exports.delete= async function(req,res)
{
    try
    {
        console.log("body ",req.query);
        var id=req.query;
        let delItems=[];
        //finding the no of selected checkboxes
        var count=Object.keys(id).length;
        
        for(let key of Object.keys(id))
        {
            //console.log("key ",key);
            let deletedItem=await List.findByIdAndDelete(key);
            console.log(deletedItem);
            delItems.push(deletedItem);
        }
        console.log(delItems);
        if(req.xhr)
        {
            console.log(delItems);
            return res.status(200).json({
                message:"Selected Lists deleted Successfully",
                data:{
                    deletedItems:delItems,
                }
            });
        }
        return res.redirect("back");
    }
    catch(err)
    {
        console.log("error in deleting lists ",err);
        return;
    }
    
}