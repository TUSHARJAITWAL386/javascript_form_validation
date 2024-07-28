function myfunction(){
    let x = document.getElementById('username').value;
    let y = document.getElementById('password').value;
    let z = document.getElementById('confirm-password').value;

    if(x == "" || y == "" || z == "")
    {
        alert("All fields are mandatory");
        return false;
    }

    else if(y!=z){
        alert("please enter same password!");
        return false;
    }

    else{
        true;
    }

}