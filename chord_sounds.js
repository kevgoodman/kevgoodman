document.addEventListener('DOMContentLoaded', function() {
  var images = document.querySelectorAll('.chord-image');
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      var audioSrc = this.getAttribute('data-audio');
      var audio = new Audio(audioSrc);
      audio.play();
    });
  });
});
