console.log("welcome to self notes")

let Addbtn=document.getElementById("Addbtn");
Addbtn.addEventListener("click",function(e){

    let Addtxt=document.getElementById("Addtxt")
    let notes=localStorage.getItem("notes");
    if (notes==null){
        notesobj=[];
    }
    else{
       notesobj=JSON.parse(notes)

    }


    notesobj.push(Addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));

    Addtxt.value="";
    console.log(notesobj);

    





})