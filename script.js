// Variables
let videoStream;
const video = document.getElementById('video');
const socket = io('https://your-glitch-project.glitch.me');

// Function to start the call
function startCall() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
      videoStream = stream;
      video.srcObject = stream;
      socket.emit('call');
    })
    .catch((error) => {
      console.log('Error accessing media devices:', error);
    });
}

// Function to share the screen
function shareScreen() {
  navigator.mediaDevices.getDisplayMedia({ video: true, audio: false })
    .then((stream) => {
      videoStream.getTracks().forEach((track) => {
        track.stop();
      });
      videoStream = stream;
      video.srcObject = stream;
      socket.emit('screenShare');
    })
    .catch((error) => {
      console.log('Error accessing screen sharing:', error);
    });
}
