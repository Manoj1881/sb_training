function validateform()
{
     if(document.getElementById("firstname").value=="") {
            alert("Enter first name");
            document.getElementById("firstname").focus();
            return false;
                 }
                 
if(document.getElementById("lastname").value=="") {
            alert("Enter last Name");
            document.getElementById("lastname").focus();
            return false;
      }
      if(document.getElementById("mobile number").value=="") {
             alert("Enter mobile");
             document.getElementById("mobile number").focus();
             return false;
       }
     else {
         var mobile= document.getElementById("mobile number").value;
       var pattern=/\d{10}$/;
         if(!pattern.test(mobile))
         {
           alert("Enter valid mobile");
          document.getElementById("mobile").focus();
          return false;
         }
      }
      if(document.getElementById("new password").value=="") {
             alert("Enter password");
             document.getElementById("new password").focus();
             return false;
       }
      
     }

