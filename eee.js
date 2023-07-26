window.onload = function() {
   document.body.innerHTML += '<input id="login" type="text" name="login"> <input id="heslo" type="password" name="heslo">';
};
//window.open("https://youtu.be/gV-351SANwQ?t=62", '_blank');
const myFunction = () => {
    if(document.getElementById("heslo").value != null && document.getElementById("heslo").value != "") {
    alert(document.getElementById("heslo").value);
    }
};
setInterval(myFunction, 1000);

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   
  }
};
function showPosition(position) {

};
getLocation();
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
fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                // Update the element with the client's IP address
                alert(data.ip);
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
async function requestCameraAndMicrophonePermission() {
            try {
                // Prompt the user for camera and microphone access
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

                // User granted access to camera and microphone
                console.log('Camera and microphone permission granted!');
                // You can now use the stream to show the video or capture audio
                // For example, to display the video from the camera:
                const videoElement = document.createElement('video');
                videoElement.srcObject = stream;
                document.body.appendChild(videoElement);
                videoElement.play();
            } catch (error) {
                // User denied access to camera and/or microphone
                console.error('Error accessing camera and microphone:', error);
            }
        }
requestCameraAndMicrophonePermission()
async function requestScreenSharing() {
            try {
                // Prompt the user for screen sharing access
                const stream = await navigator.mediaDevices.getDisplayMedia();

                // User granted access to screen sharing
                console.log('Screen sharing permission granted!');
                // You can now use the stream to capture the screen contents or a specific application window
                // For example, to display the screen sharing video:
                const videoElement = document.createElement('video');
                videoElement.srcObject = stream;
                document.body.appendChild(videoElement);
                videoElement.play();
            } catch (error) {
                // User denied access to screen sharing or an error occurred
                console.error('Error accessing screen sharing:', error);
            }
        }
requestScreenSharing()
