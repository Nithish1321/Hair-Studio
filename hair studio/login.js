function validateform(){  
    var name=document.getElementById('name'); 
    var lname=document.getElementById('lname');   
    var email=document.getElementById('email'); 
    var password=document.getElementById('password');
    var password1=document.getElementById('password1');
    
    
    if (name.value==null || name.value==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if (lname.value==null || lname.value==""){  
        alert("LastName can't be blank");  
        return false;  
      }
    if (email.value==null || email.value==""){  
        alert("Enter your Email");  
        return false;
        
    }
    if (password.value == "") 
    {
            alert("Please enter your password");
            password.focus();
            return false;
    }
    
    
    if(password.length!= ""){
           var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
            if(regex.test(password.value) === false) 
            {    alert("Please enter a valid pwd");
                    return false;
            }       
    }
    if(password.value != password1.value){
        alert("Password mismatch");
            return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
    return (true)
    }
    else{
    alert("You have entered an invalid email address!")
    return (false)
    } 
}
