function showButtons(icon) {
  var buttons = document.querySelector('.buttons');
  var title = document.querySelector('.title2');
  var root = document.querySelector('.title');
  var titleb = document.querySelector('.titleb');

  var buttons1 = document.querySelector('.buttons2');
  var title1 = document.querySelector('.title3');
  var up = document.querySelector('.up');
  var ic = document.querySelector('.icon3');

  if (buttons.style.display === 'none') {
    icon.classList.add("rotated");
    icon.style.transform = "rotate(90deg)";
    buttons.style.display = 'grid';
    title.style.display = 'none';
    root.style.display = 'none';
    titleb.style.display = 'grid';
    up.style.display = 'grid';

    buttons1.style.display = 'none';
    title1.style.display = 'none';
    ic.style.display = 'none';
  } else {
    buttons.style.display = 'none';
    title.style.display = 'grid';
    icon.classList.remove("rotated");
    icon.style.transform = "rotate(0deg)";
    titleb.style.display = 'none';
    root.style.display = 'grid';

    buttons1.style.display = 'none';
    title1.style.display = 'grid';
    ic.style.display = 'grid';
    up.style.display = 'none';
  }
}

function showEmpty(icon) {
  var buttons = document.querySelector('.buttons2');
  var title = document.querySelector('.title3');
  var root = document.querySelector('.title');
  var titlec = document.querySelector('.titlec');

  var buttons1 = document.querySelector('.buttons');
  var title1 = document.querySelector('.title2');
  var up2 = document.querySelector('.up2');

  var ic = document.querySelector('.icon');

  if (buttons.style.display === 'none') {
    icon.classList.add("rotated");
    icon.style.transform = "rotate(90deg)";
    buttons.style.display = 'grid';
    title.style.display = 'none';
    root.style.display = 'none';
    titlec.style.display = 'grid';

    buttons1.style.display = 'none';
    title1.style.display = 'none';
    ic.style.display = 'none';
    up2.style.display = 'grid';


  } else {
    buttons.style.display = 'none';
    title.style.display = 'grid';
    icon.classList.remove("rotated");
    icon.style.transform = "rotate(0deg)";
    titlec.style.display = 'none';
    root.style.display = 'grid';

    buttons1.style.display = 'none';
    title1.style.display = 'grid';
    ic.style.display = 'grid';
    up2.style.display = 'none';
  }
}


function sprinkleImages() {
  var container = document.createElement("div");
  container.classList.add("sprinkles-container");
  container.style.position = "absolute";
  container.style.left = "0";
  container.style.top = "0";
  container.style.width = "100%";
  container.style.height = "100%";

  for (var i = 0; i < 50; i++) {
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

    container.appendChild(sprinkle);
  }

  document.body.appendChild(container);

  if (typeof sprinkleImages.counter == 'undefined') {
    sprinkleImages.counter = 1;
  } else {
    sprinkleImages.counter++;
  }
  if (sprinkleImages.counter < 8) {
    sprinkleImages();
  }
}
