let allUsers=JSON.parse(localStorage.getItem("allUsers")) || [];
function onSignUp(){
     let inputs = document.getElementsByTagName("input");
      var firstName = inputs[0].value;
    var email = inputs[1].value;
    var password = inputs[2].value;
   var confirmpassword = inputs[3].value;

 if(!firstName || !email || !password ||!confirmpassword){
    alert("Please fill in all fields");
    return

 }
 const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 if(!emailRegex.test(email)){
    alert("Please enter a valid email address");
    return
 }
 if(password.length < 8){
    alert("Password must be at least 8 characters long");
    return
}
if(password!==confirmpassword){
    alert("check your password");
    return
}
var user={
    firstName: firstName,
    email: email,
    password: password
}
allUsers.push(user);
localStorage.setItem("allUsers", JSON.stringify(allUsers));
alert("User signed up successfully");

}
