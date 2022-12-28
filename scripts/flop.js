
var root = document.querySelector('.title');
var up2 = document.querySelector('.up2');
var buttons2 = document.querySelector('.buttons2');
var b0dy = document.querySelector('body');
var container = document.createElement("div");

function sprinkleImages() {
  container.classList.add("sprinkles-container");
  container.style.position = "absolute";
  container.style.left = "0";
  container.style.top = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  up2.style.background = "linear-gradient(to right, #000000, #30000057)";
  up2.style.backgroundImage = "url('resources/images/stack.gif')";
  up2.style.backgroundSize = "cover";
  up2.style.backgroundPosition = "center";
  up2.style.backgroundRepeat = "no-repeat";
  b0dy.style.background = "linear-gradient(to right, #000000, #30000057)";
  b0dy.style.backgroundImage = "url('resources/images/stack.gif')";
  b0dy.style.backgroundSize = "cover";
  b0dy.style.backgroundPosition = "center";
  b0dy.style.backgroundRepeat = "no-repeat";
  b0dy.style.backgroundAttachment = "fixed";
  buttons2.style.background = "linear-gradient(to right, #000000, #30000057)";
  buttons2.style.backgroundImage = "url('resources/images/stack.gif')";
  buttons2.style.backgroundSize = "cover";
  buttons2.style.backgroundPosition = "center";
  buttons2.style.backgroundRepeat = "no-repeat";
  root.style.background = "linear-gradient(to right, #000000, #30000057)";
  root.style.backgroundImage = "url('resources/images/stack.gif')";
  root.style.backgroundSize = "cover";
  root.style.backgroundPosition = "center";
  root.style.backgroundRepeat = "no-repeat";
  for (var i = 1; i < 4; i++) {
    var sprinkle = document.createElement("img");
    sprinkle.src = "resources/images/spider2.gif";
    sprinkle.classList.add("sprinkle");
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    sprinkle.style.position = "absolute";
    sprinkle.style.left = x + "px";
    sprinkle.style.top = y + "px";
    var rotation = Math.floor(Math.random() * 360);
    sprinkle.style.transform = "rotate(" + rotation + "deg)";
    sprinkle.style.mixBlendMode = "darken";
    sprinkle.style.imageRendering = "optimizeSpeed";
    sprinkle.addEventListener("click", function (event) {
      event.target.remove();
      location.reload(true);
    });
    sprinkle.addEventListener("mouseover", function () {
      sprinkle.style.transform = "rotate(360deg)";
    });
    sprinkle.addEventListener("mouseout", function () {
      sprinkle.style.transform = "rotate(0deg)";
    });
    container.appendChild(sprinkle);
  }
  document.body.appendChild(container);
  if (typeof sprinkleImages.counter == 'undefined') {
    sprinkleImages.counter = 1;
  } else {
    sprinkleImages.counter++;
  }
  if (sprinkleImages.counter < 10) {
    sprinkleImages();
  }
}
