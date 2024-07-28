function myfucntion(){
    let a = document.getElementById('fname').value;
    let b = document.getElementById('lname').value;
    let c = document.getElementById('email').value;
    let d = document.getElementById('contact').value;
    let e = document.getElementById('age').value;
    let f = document.getElementById('address').value;
    let g = document.getElementById('password').value;
    let h = document.getElementById('confirm-password').value;
    var letters = /^[A-Za-z]+$/;

    if(a=="" || b=="" || c=="" || d=="" || e=="" || f=="" || g=="" || h==""){
        alert("All fields are mandatory");
        return false;
    }

    else if(a.length == 0 || a.length > 25 ){
        alert("FirstName length should be less then 25 character");
        return false;
    }

    else if(!a.match(letters)){
        alert("FirstName should not contain other characters");
        return false;
    }

    else if(b.length == 0 || b.length > 25){
        alert("LastName length should be less then 25 character");
        return false;
    }

    else if(!b.match(letters)){
        alert("LastName should not contain other characters");
        return false;
    }

    else if(d.length< 10 || d.length > 10){
        alert("Number Should be a 10 digits!,please enter valid number!");
        return false;
    }

    else if(isNaN(d)){
        alert("Only Numbers are Allowed!,please enter valid number!");
        return false;
    }


    else if(e < 1 || e > 100){
        alert("please enter valid Age!");
        return false;
    }

    else if(g!=h){
        alert("please enter same password!");
        return false;
    }

    else
    {
        true
    }
}