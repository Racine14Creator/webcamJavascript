document.addEventListener("DOMContentLoaded", function(){
    const video = document.getElementById("CameraId")
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){video.srcObject= stream})
        .catch(function(error){console.error('Error accession the camera: ', error);}) 
})