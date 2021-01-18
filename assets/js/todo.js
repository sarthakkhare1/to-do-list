var des=$(".txtarea");
var dropmenuButton=$(".drop-menu")
var desbutton=$(".descript");
var category=$(".category");
var calender=$(".calender");
var addTask=$("#add-task")
var dateButton=$("#due-date");

desbutton.on("click",function()
{
    des.addClass("bck-color-light");
    category.removeClass("bck-color-light");
    calender.removeClass("bck-color-light");
})

dropmenuButton.on("click",function()
{
    category.addClass("bck-color-light");
    des.removeClass("bck-color-light");
    calender.removeClass("bck-color-light");
})

dateButton.on("click",function()
{
    category.removeClass("bck-color-light");
    des.removeClass("bck-color-light");
    calender.addClass("bck-color-light");
})

addTask.on("click",function()
{
    category.removeClass("bck-color-light");
    des.removeClass("bck-color-light");
    calender.removeClass("bck-color-light");
})

var checkboxs=$(".outside-list li input");
var taskNames=$(".task-details span");
var taskDates=$(".task-details p");


for( let i=0;i<checkboxs.length;i++)
{
    checkboxs[i].addEventListener("click",function()
    {
        //console.log(checkboxs[i],i,checkboxs.length);
        if(checkboxs[i].checked)
        {
            //checkboxs[i].style.backgroundColor="#169F5D";
            taskNames[i].classList.add("lineThrough");
            taskDates[i].classList.add("lineThrough");
        }
        else
        {
            //checkboxs[i].style.backgroundColor="white";
            taskNames[i].classList.remove("lineThrough");
            taskDates[i].classList.remove("lineThrough");
        }
    })
}

function linethrough(lists)
{
    

     for( let list of lists)
     {
        console.log(list);
        let check=$(" input",list);
        let taskName=$(" .task-details span",list);
        let taskDate=$(" .task-details p",list);
        checkboxs.push(check);
        taskNames.push(taskName);
        taskDates.push(taskDate);
        
        
    }
}

$(document).ready(function()
{
    $("#due-date").attr("min",todayDate());
})

function todayDate()
{
    var today=new Date();
    var dd=today.getDate();
    var mm=today.getMonth()+1;
    var yyyy=today.getFullYear();

    if(dd<10)
    {
        dd="0"+dd;
    }

    if(mm<10)
    {
        mm="0"+mm;
    }
    return mm+"-"+dd+"-"+yyyy;
}

// was trying using ajax but didnt work
   
