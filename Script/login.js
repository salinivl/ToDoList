function validateUName(){
    let name = document.getElementById("username").value;
    let nameError=document.getElementById("usernameerror")    
    // let regexName = /^admin$/;
    
      if (name =="admin") {
         nameError.innerHTML= ""
        //  nameError.style.color='green'
         return true
      }
      else{
       nameError.innerHTML="Username is incorrect. Try Again"
       nameError.style.color='red'
       return false
      }
 
 }

function validatePassword(){
    let password=document.getElementById("password").value;
    let pwdError=document.getElementById("pwderror")
    // let regexpwd = /^12345$/;       
     if (password=="12345") {
         pwdError.innerHTML=""
        //  pwdError.style.color='green'
         return true
      }
      else{
       pwdError.innerHTML="Password is incorrect. Try Again"
       pwdError.style.color='red'
       return false
      }
    }

    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("User has clicked on the button!");
      if (validateUName() && validatePassword()){
        window.location.replace("home.html");
      }
    });
    

    
   //  document.querySelector("#callback_btn")
   //  .addEventListener("click",function(){
   //      console.log("User has clicked on the button!");
   //      if (validateUName() && validatePassword()){
   //      window.location.replace("home.html");}
   //    //   return true}
   //  })
 
   
// function validateForm(){
   
//         if (validateUName() && validatePassword()){
//          // let button_clk=document.getElementById("#btn");
//          // setTimeout(redirecthome,3000);
//          // redirecthome();
                     
    
         
//             return true;
//         }
     
//         else{
//            return false;
//         }
//      }


   



