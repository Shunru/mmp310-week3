var submit = document.getElementById("submit");
submit.onclick = function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var borough= document.getElementById("borough").value;
    console.log(name,email,test);
    var message = document.getElementById("message");
    message.innerHTML = "Hello" + name +" ,from " + borough + ", welcome to my website.";
    
};