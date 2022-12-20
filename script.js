window.onload = function () {
  var splash = document.querySelector('.overlay')
  document.title = 'Deskflop';
  splash.style.display = 'none';
};

function showButtons(icon) {
  var buttons = document.querySelector('.buttons');
  var title = document.querySelector('.title2');
  var root = document.querySelector('.title');
  var titleb = document.querySelector('.titleb');
  var bm = document.querySelector('.bm');
  var icon = document.querySelector('.icon');
  var buttons1 = document.querySelector('.buttons2');
  var title1 = document.querySelector('.title3');
  var title4 = document.querySelector('.title4');
  var up = document.querySelector('.up');
  var ic = document.querySelector('.icon3');
  var ic4 = document.querySelector('.icon4');

  if (buttons.style.display === 'none') {
    icon.style.display = 'none';
    buttons.style.display = 'grid';
    title.style.display = 'none';
    root.style.display = 'none';
    titleb.style.display = 'grid';
    up.style.display = 'grid';
    bm.style.transform = "rotate(25deg)";

    buttons1.style.display = 'none';
    title1.style.display = 'none';
    ic.style.display = 'none';
    title4.style.display = 'none';
    ic4.style.display = 'none';
  } else {
    buttons.style.display = 'none';
    title.style.display = 'grid';
    icon.style.display = 'grid';
    titleb.style.display = 'none';
    root.style.display = 'grid';
    bm.style.transform = "rotate(-25deg)";
    bm.style.transform = "rotate(0deg)";

    buttons1.style.display = 'none';
    title1.style.display = 'grid';
    title4.style.display = 'grid';
    ic.style.display = 'grid';
    ic4.style.display = 'grid';
    up.style.display = 'none';
  }
}


function swButtons(icon) {
  var buttons = document.querySelector('.buttons3');
  var title = document.querySelector('.title2');
  var root = document.querySelector('.title');
  var titled = document.querySelector('.titled');
  var bm = document.querySelector('.bm');
  var icon = document.querySelector('.icon');
  var buttons1 = document.querySelector('.buttons2');
  var title1 = document.querySelector('.title3');
  var title4 = document.querySelector('.title4');
  var up = document.querySelector('.up3');
  var ic = document.querySelector('.icon3');
  var ic4 = document.querySelector('.icon4');
  var ic5 = document.querySelector('.icon5');
  document.title = 'Deskflop';

  if (buttons.style.display === 'none') {
    icon.style.display = 'none';
    buttons.style.display = 'grid';
    title.style.display = 'none';
    root.style.display = 'none';
    titled.style.display = 'grid';
    up.style.display = 'grid';
    ic5.style.display = 'grid';
    bm.style.transform = "rotate(25deg)";

    buttons1.style.display = 'none';
    title1.style.display = 'none';
    ic.style.display = 'none';
    title4.style.display = 'none';
    ic4.style.display = 'none';
  } else {
    buttons.style.display = 'none';
    title.style.display = 'grid';
    icon.style.display = 'grid';
    titled.style.display = 'none';
    root.style.display = 'grid';
    ic5.style.display = 'none';
    bm.style.transform = "rotate(-25deg)";
    bm.style.transform = "rotate(0deg)";

    buttons1.style.display = 'none';
    title1.style.display = 'grid';
    title4.style.display = 'grid';
    ic.style.display = 'grid';
    ic4.style.display = 'grid';
    up.style.display = 'none';
  }
}

function showSpotify() {
  var buttons = document.querySelector('.spotify');
  var buttons2 = document.querySelector('.spotify2');
  var buttons3 = document.querySelector('.soundcloud');
  var bm = document.querySelector('.bm');
  var icon = document.querySelector('.icon5');

  if (buttons.style.display === 'none') {
    icon.classList.add("rotated");
    icon.style.transition = "transform 0.5s";
    icon.style.transform = "rotate(360deg)";
    buttons.style.display = 'grid';
    buttons2.style.display = 'none';
    buttons3.style.display = 'none';

  } else {
    buttons.style.display = 'none';
    buttons2.style.display = 'none';
    buttons3.style.display = 'none';
    icon.classList.remove("rotated");
    icon.style.transform = "rotate(0deg)";
  }
}

function showSpotify2() {
  var buttons = document.querySelector('.spotify');
  var buttons2 = document.querySelector('.spotify2');
  var buttons3 = document.querySelector('.soundcloud');
  var bm = document.querySelector('.bm');
  var icon = document.querySelector('.icon5');

  if (buttons2.style.display === 'none') {
    icon.classList.add("rotated");
    icon.style.transition = "transform 0.5s";
    icon.style.transform = "rotate(360deg)";
    buttons2.style.display = 'grid';
    buttons.style.display = 'none';
    buttons3.style.display = 'none';

  } else {
    buttons2.style.display = 'none';
    buttons.style.display = 'none';
    buttons3.style.display = 'none';
    icon.classList.remove("rotated");
    icon.style.transform = "rotate(0deg)";
  }
}

function showSoundcloud() {
  var buttons = document.querySelector('.spotify');
  var buttons2 = document.querySelector('.spotify2');
  var buttons3 = document.querySelector('.soundcloud');
  var bm = document.querySelector('.bm');
  var icon = document.querySelector('.icon5');

  if (buttons3.style.display === 'none') {
    icon.classList.add("rotated");
    icon.style.transition = "transform 0.5s";
    icon.style.transform = "rotate(360deg)";
    buttons3.style.display = 'grid';
    buttons2.style.display = 'none';
    buttons.style.display = 'none';

  } else {
    buttons3.style.display = 'none';
    buttons2.style.display = 'none';
    buttons.style.display = 'none';
    icon.classList.remove("rotated");
    icon.style.transform = "rotate(0deg)";
  }
}


function showEmpty(icon) {
  var buttons = document.querySelector('.buttons2');
  var title = document.querySelector('.title3');
  var root = document.querySelector('.title');
  var titlec = document.querySelector('.titlec');
  var bm = document.querySelector('.bm');
  var ic4 = document.querySelector('.icon4');
  var icon = document.querySelector('.icon3');
  var buttons1 = document.querySelector('.buttons');
  var title1 = document.querySelector('.title2');
  var up2 = document.querySelector('.up2');

  var title4 = document.querySelector('.title4');
  var ic = document.querySelector('.icon');

  document.title = 'Deskflop';

  if (buttons.style.display === 'none') {
    icon.style.display = 'none';
    buttons.style.display = 'grid';
    title.style.display = 'none';
    title4.style.display = 'none';
    root.style.display = 'none';
    titlec.style.display = 'grid';
    bm.style.transform = "rotate(25deg)";

    buttons1.style.display = 'none';
    title1.style.display = 'none';
    ic.style.display = 'none';
    ic4.style.display = 'none';
    up2.style.display = 'grid';


  } else {
    buttons.style.display = 'none';
    title.style.display = 'grid';
    icon.style.display = 'grid';
    titlec.style.display = 'none';
    root.style.display = 'grid';
    title4.style.display = 'grid';
    bm.style.transform = "rotate(-25deg)";
    bm.style.transform = "rotate(0deg)";

    buttons1.style.display = 'none';
    title1.style.display = 'grid';
    ic.style.display = 'grid';
    ic4.style.display = 'grid';
    up2.style.display = 'none';
  }
}


function sprinkleImages() {
  var titlec = document.querySelector('.titlec');
  var container = document.createElement("div");
  container.classList.add("sprinkles-container");
  container.style.position = "absolute";
  container.style.left = "0";
  container.style.top = "0";
  container.style.width = "100%";
  container.style.height = "100%";

  titlec.style.background = "linear-gradient(to right, #000000, #30000057)";
  titlec.style.backgroundImage = "url('resources/images/PdGN.gif')";
  titlec.style.backgroundSize = "cover";
  titlec.style.backgroundPosition = "center";

  for (var i = 1; i < 8; i++) {
    var bm = document.querySelector('.bm');
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
    sprinkle.style.backgroundBlendMode = "darken";
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

