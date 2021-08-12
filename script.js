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
    if ( d_day == 'start') { // 날짜수 : 34일 ex. 커플 기념일 (1일부터 시작)
        let setDate = new Date(date);
        setDate.setHours(0,0,0,0);
        let now = new Date();
        now.setHours(0,0,0,0);
        let st_distance =  now.getTime() - setDate.getTime();
        let day = Math.floor(st_distance/(1000*60*60*24));

        if(setDate > now) {
            d_day = `D${day}`;
        } else if (setDate < now) {
            d_day = `${day}일`;
        } else {
            d_day = `D-DAY`;
        }

    } else { // 디데이 : D-34 ex. 수능 시험 등 (D+은 0일부터 시작)
        let setDate = new Date(date);
        setDate.setHours(0,0,0,0);
        let now = new Date();
        now.setHours(0,0,0,0);
        let ut_distance = setDate.getTime() - now.getTime();
        let day = Math.abs(Math.ceil(ut_distance/(1000*60*60*24)));
        
        if(setDate < now) {
            d_day = `D+${day}`;
        } else if(setDate > now) {
            d_day = `D-${day}`;
        } else {
            d_day = `D-DAY`;
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

    let update = document.querySelector(".update");
    update.innerHTML = `수정`;

    let close = document.querySelector(".close");
    close.innerHTML = `삭제`;

    if (close) {
        close.addEventListener("click", DeleteDday);
    }
    if (update) {
        update.addEventListener("click", UpdateDday);
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

    // image
    document.querySelector(".icon").src =  `./icon/date.png`;

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
function UpdateDday() {
    document.querySelector(".register-form").style.display = "block";

    //show value in form
    document.querySelector(".subject_class").value = subject;
    const d_day_value = d_day;
    console.log(d_day_value)
    document.querySelector(".date_class").value = date;

    document.getElementById("subject").value = subject;
    // document.querySelector("input[name='d_day']:checked").value = d_day;
    document.getElementById("date").value = date;

}


// localstorage