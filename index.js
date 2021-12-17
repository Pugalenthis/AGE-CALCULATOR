let input = document.createElement("input")
input.setAttribute("type","date")
input.setAttribute("id","date")
document.body.append(input)

let button = document.createElement("button")
button.innerHTML="Display data"
button.setAttribute("type","button")
button.addEventListener("click",displaydata)
button.className="btn btn-primary"
document.body.append(button)

var div = document.createElement("div");

function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);
    

    var seconddiff=Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);

    var hoursdiff=Math.floor(minutediff/60);
    console.log(hoursdiff);

    var daydiff=Math.floor(hoursdiff/24);
    console.log(daydiff);

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);

      
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

    div.innerHTML = `${millisecdiff} milliseconds.<br> ${seconddiff}seconds.<br> ${minutediff}minutes.<br> ${hoursdiff}hours.<br> ${daydiff}days.<br> ${yeardiff}years.<br> ${monthdiff}months.`;

   }
   else{
     console.log("give a proper valid date")  
   }

}


// div.innerHTML = `${millisecdiff} milliseconds. ${seconddiff}seconds. ${minutediff}minutes. ${hoursdiff}hours. ${daydiff}days. ${yeardiff}years. ${monthdiff}months.`;

document.body.append(div);
