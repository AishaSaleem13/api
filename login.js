
function onsignin(){
    let inputs =document.getElementsByTagName("input");
 let email = inputs[0].value;
let password = inputs[1].value;

// storing input vaue of login page  /

if( !email || !password ){
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
let getUser = JSON.parse(localStorage.getItem(`allUsers`));
userFound=false;
for (let i = 0; i < getUser.length; i++) {
   if(getUser[i].email === email && getUser[i].password === password){ 
          alert("User logged in successfully");
           userFound=true;
            window.location.href="./index.html";
            break;
    }
}
    if(!userFound){
        alert("Invalid email or password");
        return;
  
}
}