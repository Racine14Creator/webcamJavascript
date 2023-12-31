# webcamJavascript

### This project was built with HTML and JavaScript.

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Camera</title>
    <link rel="stylesheet" href="./styleCss.css">

</head>

<body>
    <div class="container">
        <h3>WebCam with Javscript</h3>
        <video autoplay id="CameraId"></video>
        <div class="box">
            <ul>
                <li><a target="_blank" href="https://www.facebook.com/grace14.bisimwa"><span class="icon"><img
                                src="./img/facebook.svg" alt="facebook" /></span></a></li>
                <li><a target="_blank" href="https://www.instagram.com/bisimwa_14/"><span class="icon"><img
                                src="./img/instagram.svg" alt="Instagram" /></span></a>
                </li>
                <li><a target="_blank" href="https://www.threads.net/@bisimwa_14"><span class="icon"><img
                                src="./img/threads.svg" alt="facebook" /></span></a>
                <li><a target="_blank" href="https://www.linkedin.com/in/grace-bisimwa-1a20a3189/"><span
                            class="icon"><img src="./img/linkedin.svg" alt="facebook" /></span></a>
                </li>
                <li><a target="_blank" href="https://github.com/Racine14Creator"><span class="icon">
                            <img src="./img/github.svg" alt="facebook" /></span></a>
                </li>
            </ul>
        </div>
    </div>
</body>
<script src="./scriptJs.js"></script>

</html>
```

### Style .CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,700;1,300;1,400;1,700&family=Dancing+Script:wght@400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,500;1,300;1,400;1,700&display=swap');

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: black;
    font-family: Ubuntu;
}

h2,
h1,
h3,
h4 {
    margin: 10px;
}

.container {
    position: relative;
    max-width: 500px;
    padding: 20px 20px 50px 20px;
    border-radius: 10px;
    margin: 20px auto;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

video {
    width: 100%;
    background-image: url("./img/video.jpg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
}

.box {
    position: absolute;
    bottom: -30px;
    background-color: aliceblue;
    padding: 10px;
    border-radius: 20px;
    margin-top: 20px;
}

.box ul {
    list-style: none;
    display: flex;
}

.icon,
img {
    width: 40px;
    height: 40px;
    padding: 10px;
    cursor: pointer;
    transition: all ease 0.5s;
    border-radius: 10%;
}

img:hover {
    background-color: aquamarine;
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.123);
}

```


### JavaScript

```js
document.addEventListener("DOMContentLoaded", function(){
    const video = document.getElementById("CameraId")
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){video.srcObject= stream})
        .catch(function(error){console.error('Error accession the camera: ', error);}) 
})
```
