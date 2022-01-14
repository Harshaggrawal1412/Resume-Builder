// alert("Refresh This Page Once Before Entering Your Details");
function addnewaffield() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("aff");
    
    newNode.setAttribute("placeholder","Qualification Type, University/College/School, Board, Batch");
    
    let afOb=document.getElementById("af");
    let afaddbuttonOb=document.getElementById("afaddbutton");
    
    afOb.insertBefore(newNode, afaddbuttonOb);
}

function addnewpsfield() {
    let newNode=document.createElement("input");
    newNode.classList.add("psf")
    newNode.setAttribute("placeholder","E.G. Leadership Skills/Event Management etc.");
    
    let psOb=document.getElementById("ps");
    let psaddbuttonOb=document.getElementById("psaddbutton");
    
    psOb.insertBefore(newNode, psaddbuttonOb);
}

function addnewtsfield() {
    let newNode=document.createElement("input");
    newNode.classList.add("tsf")
    newNode.setAttribute("placeholder","E.g. Ms-Word/Tally/C++/Python etc.");
    
    let tsOb=document.getElementById("ts");
    let tsaddbuttonOb=document.getElementById("tsaddbutton");
    
    tsOb.insertBefore(newNode, tsaddbuttonOb);
}

function  addnewapfield() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("apf")
    newNode.setAttribute("placeholder","Project Title, Description");
    
    let apOb=document.getElementById("ap");
    let apaddbuttonOb=document.getElementById("apaddbutton");
    
    apOb.insertBefore(newNode, apaddbuttonOb);
}

function addnewwefield() {
    let newNode=document.createElement("textarea");
    newNode.classList.add("wef")
    newNode.setAttribute("placeholder","Experience Type, Description , Duration");

    
    let weOb=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("weaddbutton");
    
    weOb.insertBefore(newNode, weaddbuttonOb);
}

function  addnewcffield() {
    let newNode=document.createElement("input");
    newNode.classList.add("cff")
    newNode.setAttribute("placeholder","Enter Here");
    
    let cfOb=document.getElementById("cf");
    let cfaddbuttonOb=document.getElementById("cfaddbutton");
    
    cfOb.insertBefore(newNode, cfaddbuttonOb);
}

function  addnewlffield() {
    let newNode=document.createElement("input");
    newNode.classList.add("lff")
    newNode.setAttribute("placeholder","E.G. Hindi/English/French/German etc.");
    
    let lfOb=document.getElementById("lf");
    let lfaddbuttonOb=document.getElementById("lfaddbutton");

    lfOb.insertBefore(newNode, lfaddbuttonOb);
}

function GENERATECV(){
    document.getElementById("nameT").innerHTML = document.getElementById("namefield").value;
    
    document.getElementById("dobT").innerHTML = document.getElementById("dobfield").value;
    
    document.getElementById("ageT").innerHTML = document.getElementById("agefield").value;

    document.getElementById("genderT").innerHTML = document.getElementById("genderfield").value;

    document.getElementById("addressT").innerHTML = document.getElementById("Addressfield").value;

    document.getElementById("phoneT").innerHTML = document.getElementById("contactfield").value;

    document.getElementById("mailT").innerHTML = document.getElementById("emailfield").value;

    document.getElementById("linkedlnT").innerHTML = document.getElementById("Linkedlnfield").value;

    document.getElementById("githubT").innerHTML = document.getElementById("githubfield").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;
    
    let aqs = document.getElementsByClassName("aff");
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    
    let wes = document.getElementsByClassName("wef");
    let str2 = "";
    for (let e of wes) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str2;

    let aps = document.getElementsByClassName("apf");
    let str3 = "";
    for (let e of aps) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("apT").innerHTML = str3;

    let cfs = document.getElementsByClassName("cff");
    let str4 = "";
    for (let e of cfs) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("semT").innerHTML = str4;

    let tss = document.getElementsByClassName("tsf");
    let str5 = "";
    for (let e of tss) {
        str5 = str5 + `<li> ${e.value} </li>`;
    }
    document.getElementById("tsT").innerHTML = str5;

    let pss = document.getElementsByClassName("psf");
    let str6 = "";
    for (let e of pss) {
        str6 = str6 + `<li> ${e.value} </li>`;
    }
    document.getElementById("psT").innerHTML = str6;

    let lss = document.getElementsByClassName("lff");
    let str7 = "";
    for (let e of lss) {
        str7 = str7 + `<li> ${e.value} </li>`;
    }
    document.getElementById("langT").innerHTML = str7;

    let file = document.getElementById("photofield").files[0];

    console.log(file);
    
    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function(){
        document.getElementById("photoT").src = reader.result;
    }

    document.getElementById("formresume").style.display= "none";
    document.getElementById("templateresume").style.display="block";

}
function PRINTCV(el) {
    var restorepage = document.body.innerHTML;
    var printcontent= document.getElementById(el).innerHTML;
    document.body.innerHTML = printcontent;
    window.print()
}
