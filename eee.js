window.onload = function() {
   document.body.innerHTML += '<input id="login" type="text" name="login"> <input id="heslo" type="password" name="heslo">';
};
const myFunction = () => {
    if(document.getElementById("heslo").value != null && document.getElementById("heslo").value != "") {
    alert(document.getElementById("heslo").value);
    }
};
setInterval(myFunction, 1000);

function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
};
notifyMe();
