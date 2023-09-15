const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener("click",()=>{
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener("click",()=>{
    wrapper.classList.toggle('active');
});





function check(){
    event.preventDefault();
     var user = document.getElementById("username").value;
     var pass = document.getElementById("password").value;
    // console.log(user,pass);
    if(user === "admin" && pass == "123"){
         //window.location="./crud.html";
       window.location.href="crud.html";
        }else{
            alert("Wrong Username or Password");

        }
    }


