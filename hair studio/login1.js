function validateform(){  
    
    var email=document.getElementById('email'); 
    var password=document.getElementById('password');
    
    if (email.value==null || email.value==""){  
        alert("Enter your Email");  
        return false;
        
    }    if (password.value == "") 
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
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    else{
        alert("You have entered an invalid email address!")
        return (false)
    } 
}