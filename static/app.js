var video = document.querySelector("#videoElement");

var nextSlide = document.getElementById('next_slide');

var helloParagraph = document.getElementById('helloPara');

camBtn = document.getElementById('faceCamBtn');


addEventListener('click', e => {
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
}
)


addEventListener('click', e => {
  document.getElementById('helloPara').innerHTML = 'how to say hello';
  document.getElementById('helloPara').innerHTML = 'how to say your welcome';
});