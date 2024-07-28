	document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const isValid = validation();
  
    if (isValid) {
      window.location.href = "submit.html";
    }
  });

  function togglePasswordVisibility() {
      const passwordField = document.getElementById("password");
      const toggleButton = document.getElementById("togglePassword");
      
      if (passwordField.type === "password") {
          passwordField.type = "text";
          toggleButton.textContent = "";
      } else {
          passwordField.type = "password";
          toggleButton.textContent = "";
      }
    } 
  
  
  function validation(){
    let isValid = true;
  
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var contact = document.getElementById('contact').value;
    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    var hindi = document.getElementById('hindi').checked;
    var english = document.getElementById('english').checked;
    var french = document.getElementById('french').checked;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm-password').value;
    var pattern = /^[a-zA-Z]+$/;
    var special_char =  /[!@#$%^&*(),.?":{}|<>]/;
    var contact_number = /^[0-9]+$/;
  

    if(fname == "")
      {
        document.getElementById('test1').innerHTML = "**Please write firstname in field**";
        isValid = false;
      }
    else if(fname.length < 2)
      {
      document.getElementById('test1').innerHTML = "**Please write more than one character  in field**";
      isValid = false;
    }
    else if(!isNaN(fname) || !fname.match(pattern))
      {
      document.getElementById('test1').innerHTML = "**Please write only character numbers are not allowed in field**";
      isValid = false;
    }
    else
    {
      document.getElementById('test1').innerHTML = "";
    }
  
  
    if(lname == "")
      {
        document.getElementById('test2').innerHTML = "**Please write lastname in field**";
        isValid = false;
      }
    else if(lname.length < 2)
      {
      document.getElementById('test2').innerHTML = "**Please write more than one character in field**";
      isValid = false;
    }
    else if(!isNaN(lname) || !lname.match(pattern))
      {
      document.getElementById('test2').innerHTML = "**Please write only character numbers are not allowed in field**";
      isValid = false;
    }
    else
    {
      document.getElementById('test2').innerHTML = "";
    }
  
  
    if(email == "")
      {
        document.getElementById('test3').innerHTML = "**Please write email in field**";
        isValid = false;
      }
    else
    {
      document.getElementById('test3').innerHTML = "";
     
    }
  
  
    if(address == "")
      {
        document.getElementById('test4').innerHTML = "**Please write address in field**";
        isValid = false;
      }
    else
    {
      document.getElementById('test4').innerHTML = "";
    }
    
  
    if(contact == "")
      {
        document.getElementById('test5').innerHTML = "**Please write contact in field**";
        isValid = false;
      }
    else if(contact.length < 10 || contact.length>10)
      {
        document.getElementById('test5').innerHTML = "**Please write 10 number in field**";
        isValid = false;
      }
    else if(isNaN(contact))
      {
        document.getElementById('test5').innerHTML = "**Please write only number in field**";
        isValid = false;
      }
    else if(!contact_number.test(contact))
        {
          document.getElementById('test5').innerHTML = "**Please write only numbers in field**";
          isValid = false;
        }
    else
    {
      document.getElementById('test5').innerHTML = "";
    }
  
    if(!male && !female)
      {
        document.getElementById('test8').innerHTML = "**Please select gender**";
        isValid = false;
      }
    else
    {
      document.getElementById('test8').innerHTML = "";
    }
  
    if(!hindi && !english && !french)
      {
       document.getElementById('test9').innerHTML = "**Please select checkbox**";
       isValid = false;
      }
   else
    {
     document.getElementById('test9').innerHTML = "";
   }
  
  
  
    if(password == "")
      {
        document.getElementById('test6').innerHTML = "**Please write password in field**";
        isValid = false;
      }
    else if(password.length < 8)
        {
          document.getElementById('test6').innerHTML = "**Password must be at least 8 characters long.**";
          isValid = false;
        }
    else if(!special_char.test(password))
        {
            document.getElementById('test6').innerHTML = "**Password must contain at least one special characters**";
            isValid = false;
        }
    else
    {
      document.getElementById('test6').innerHTML = "";
    }
  
  
    if(confirm_password == "")
      {
        document.getElementById('test7').innerHTML = "**Please write confirm-password in field**";
        isValid = false;
      }
    else if(password!=confirm_password)
      {
        document.getElementById('test7').innerHTML = "**Please write same password in field**";
        isValid = false;
      }
    else
    {
      document.getElementById('test7').innerHTML = "";
    }
  
    return isValid;
  }
