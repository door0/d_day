"use strict";

document.getElementById("register-form").style.display = "none";

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
    if ( d_day == 'start') { // 날짜수 : D+34 
        let setDate = new Date(date);
        let now = new Date();
        let st_distance =  now.getTime() - setDate.getTime();
        let day = Math.floor(st_distance/(1000*60*60*24));

        if(setDate > now) {
            d_day = `D${day}`;
        } else {
            d_day = `${day}일`;
        }

    } else { // 디데이 : D-34 
        let setDate = new Date(date);
        let now = new Date();
        let ut_distance = setDate.getTime() - now.getTime();
        let day = Math.abs(Math.ceil(ut_distance/(1000*60*60*24)));
        
        if(setDate < now) {
            d_day = `디데이로부터 ${day}일이 지났습니다.`;
        } else {
            d_day = `D-${day}`;
        }

    }
}

// show d-day list 
function ShowList(e) {
    e.preventDefault();
    document.getElementById("register-form").style.display = "none";

    let list = document.querySelector(".list");
    let li = document.querySelector("li");
    let cln = li.cloneNode(true);
    list.insertBefore(cln, li);

    let close = document.querySelector(".close");
    close.innerHTML = `삭제`;

    if (close) {
        close.addEventListener("click", DeleteDday);
    }

    subject = document.getElementById("subject").value;
    d_day = document.querySelector("input[name='d_day']:checked").value;
    date = document.getElementById("date").value;
    
    // form reset
    document.getElementById("subject").value = null;
    document.getElementById("start").checked = false;
    document.getElementById("until").checked = false;
    document.getElementById("date").value = null;

    Count();

    // input add node
    document.querySelector(".subject_class").innerHTML = subject;
    document.querySelector(".d_day_class").innerHTML = d_day;
    document.querySelector(".date_class").innerHTML = date;
}

// close modal
function CloseModal() {
    document.querySelector(".register-form").style.display = "none";
}

// delete dday list 
function DeleteDday() {
    let li = document.querySelector("li");
    li.remove();
}


// update dday list

// icon update

// localstorage