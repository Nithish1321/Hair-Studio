function yuno(){
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var phone=document.getElementById('phone')
    

    if (name.value==null || name.value==""){  
        alert("Name can't be blank");  
        return false;  
      }
      if (email.value==null || email.value==""){  
        alert("Enter your Email");  
        return false;
      }
      if (phone.value==null || phone.value==""){  
          alert("Enter your Phonenumber");  
          return false;
      }
      if(phone.length!= ""){
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;                
         if(regex.test(phone.value) === false) 
         {    alert("Enter a valid 10 digit ");
                 return false;
         }   
         else{
          return true;
         }    
 }
    
}
