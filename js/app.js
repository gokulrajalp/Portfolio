function validate(){

var a = document.forms["contact"]["name"].value;
if(a === ""){
    alert("Name filed is empty!");
    
    $(function(){
        $('#name').attr('placeholder',"Enter your Name or Type anything (Eg:NA)")
    });
    return false;
}

var a = document.forms["contact"]["email"].value;
if(a === ""){
    alert("Email filed is empty!");

    $(function(){
        $('#email').attr('placeholder',"Enter your EmailID or Type anything (Eg:abc@gmail.com)")
    });
    return false;
}


var a = document.forms["contact"]["message"].value;
if(a === ""){
    alert("Message filed is empty!");
    
    $(function(){
        $('#message').attr('placeholder',"This field must not empty, type your Message")
    });
    return false;
}


}

function loading(){
    var load = localStorage.getItem("load");
    if(!load){
        document.querySelector('#home').classList.add("show");
    }
    else{
        document.querySelector(`#${load}`).classList.add("show");
    }
    
}

function index(){
    document.querySelector('.index').scrollIntoView();
}

function tohide(hide){
    var i = document.querySelectorAll(`.${hide}`);

    i.forEach(tohide => {
        tohide.classList.add('d-none');
    });
}

function toshow(show){
    var j = document.querySelectorAll(`.${show}`);

    j.forEach(toshow => {
        toshow.classList.remove('d-none');
    });
}

document.querySelector('#home').addEventListener("shown.bs.collapse",function(){
    toshow("p1");
    tohide("p2");
    tohide("p3");
    tohide("p4");
    localStorage.setItem("load","home");
});

document.querySelector('#academic').addEventListener("shown.bs.collapse",function(){
    toshow("p2");
    tohide("p1");
    tohide("p3");
    tohide("p4");
    localStorage.setItem("load","academic");
    
});

document.querySelector('#projects').addEventListener("shown.bs.collapse",function(){
    toshow("p3");
    tohide("p1");
    tohide("p2");
    tohide("p4");
    localStorage.setItem("load","projects");
    
});

document.querySelector('#contact').addEventListener("shown.bs.collapse",function(){
    toshow("p4");
    tohide("p1");
    tohide("p2");
    tohide("p3");
    localStorage.setItem("load","contact");
    
});