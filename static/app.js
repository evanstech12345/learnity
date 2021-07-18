

let videodiv = document.getElementById('videodiv');

let video = document.querySelector("#videoElement");

let nextSlide = document.getElementById('next_slide');

let helloParagraph = document.getElementById('helloPara');

camBtn = document.getElementById('faceCamBtn');


camBtn.addEventListener('click', e => {
  camBtn.innerText = "Turn Off Video";
  if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}  
if (camBtn.innerText = "Turn Off Video") {
  camBtn.addEventListener('click', j => {
    video.style.display = "none";
  })
}
}
)
