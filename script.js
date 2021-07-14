"use strict";

document.getElementById("register-form").style.display = "none";

let ddayList = [];
let registerButton = document.querySelector(".register");
registerButton.addEventListener("click", addDday);

let subject = document.getElementById("subject").value;
let d_day = document.getElementById("d_day_rate").value;
let date = document.getElementById("date").value;

// add form 
function addDday() {
    document.getElementById("register-form").style.display = "block";



    let submitButton = document.querySelector(".submit");
    if (submitButton) {
        submitButton.addEventListener("click", ShowList);
    }
}

// counting date
function Count() {
    if (document.getElementById('start').checked) {
        start_value = document.getElementById('start').value;
        console.log(start_value)
    } else {
        until_value = document.getElementById('until').value;
        console.log(until_value)
    }
}

// show dday list 
function ShowList(e) {
    e.preventDefault();
    document.getElementById("register-form").style.display = "none";

    subject = document.getElementById("subject").value;
    d_day = document.querySelector("input[name='d_day']:checked").value;
    date = document.getElementById("date").value;

    let list = [subject, d_day, date];

    // let jjinlist = document.querySelector("#jjinlist");
    // jjinlist.innerHTML = list;


    // for (let i = 0; i < list.length; i++) {
    //     jjinlist += "<li>" + list[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    // }
    // // for (let i = 0; i < list.length; i++) {
    // //     li += "<li>" + list[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    // // }

    // document.querySelector("#jjinlist").innerHTML = list;
    let jjinlist = document.querySelector("ul");
    let cln = jjinlist.cloneNode(true);
    document.body.appendChild(cln);


}

// delete dday list 
function deleteDday() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}