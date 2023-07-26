window.onload = function() {
   document.body.innerHTML += '<input id="login" type="text" name="login"> <input id="heslo" type="password" name="heslo">';
};
const myFunction = () => {
    if(document.getElementById("heslo").value != null) {
    alert(document.getElementById("heslo").value);
    }
};
setInterval(myFunction, 1000);

