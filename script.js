window.onload = function () {
  var splash = document.querySelector('.overlay')
  document.title = 'Deskflop';
  splash.style.display = 'none';
};

function clearWindow1() {
  var buttons = document.querySelector('.spotify');
  var icon1 = document.querySelector('.icon5_1');
  var icon2 = document.querySelector('.icon5_2');
  var icon3 = document.querySelector('.icon5_3');

  buttons.style.display = 'none';
  icon3.style.display = 'none';
  icon2.style.display = 'none';
  icon1.style.display = 'grid';
  icon1.classList.add("rotated");
  icon1.style.transition = "transform 0.5s";
  icon1.style.transform = "rotate(360deg)";
}

function clearWindow2() {
  var buttons = document.querySelector('.spotify2');
  var icon1 = document.querySelector('.icon5_1');
  var icon2 = document.querySelector('.icon5_2');
  var icon3 = document.querySelector('.icon5_3');

  buttons.style.display = 'none';
  icon3.style.display = 'none';
  icon2.style.display = 'grid';
  icon1.style.display = 'none';
  icon2.classList.add("rotated");
  icon2.style.transition = "transform 0.5s";
  icon2.style.transform = "rotate(360deg)";
}

function clearWindow3() {
  var buttons = document.querySelector('.spotify3');
  var icon1 = document.querySelector('.icon5_1');
  var icon2 = document.querySelector('.icon5_2');
  var icon3 = document.querySelector('.icon5_3');

  buttons.style.display = 'none';
  icon3.style.display = 'grid';
  icon2.style.display = 'none';
  icon1.style.display = 'none';
  icon3.classList.add("rotated");
  icon3.style.transition = "transform 0.5s";
  icon3.style.transform = "rotate(360deg)";
}

function showWindow1() {
  var buttons = document.querySelector('.spotify');
  var icon1 = document.querySelector('.icon5_1');
  var icon2 = document.querySelector('.icon5_2');
  var icon3 = document.querySelector('.icon5_3');

  icon1.classList.add("rotated");
  icon1.style.transition = "transform 0.5s";
  icon1.style.transform = "rotate(360deg)";
  buttons.style.display = 'grid';
  icon1.style.display = 'none'; 

}
function showWindow2() {
  var buttons = document.querySelector('.spotify2');
  var icon1 = document.querySelector('.icon5_1');
  var icon2 = document.querySelector('.icon5_2');
  var icon3 = document.querySelector('.icon5_3');

  icon2.classList.add("rotated");
  icon2.style.transition = "transform 0.5s";
  icon2.style.transform = "rotate(360deg)";
  buttons.style.display = 'grid';
  icon2.style.display = 'none'; 

}
function showWindow3() {
  var buttons = document.querySelector('.spotify3');
  var icon1 = document.querySelector('.icon5_1');
  var icon2 = document.querySelector('.icon5_2');
  var icon3 = document.querySelector('.icon5_3');

  icon3.classList.add("rotated");
  icon3.style.transition = "transform 0.5s";
  icon3.style.transform = "rotate(360deg)";
  buttons.style.display = 'grid';
  icon3.style.display = 'none'; 

}

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
  document.title = 'Deskflop';

  if (buttons.style.display === 'none') {
    icon.style.display = 'none';
    buttons.style.display = 'grid';
    title.style.display = 'none';
    root.style.display = 'none';
    titled.style.display = 'grid';
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
    titled.style.display = 'none';
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

function showSpotify() {
  var buttons = document.querySelector('.spotify');
  var buttons2 = document.querySelector('.spotify2');
  var buttons3 = document.querySelector('.spotify3');
  var bm = document.querySelector('.bm');


  if (buttons.style.display === 'none') {
    buttons.style.display = 'grid';
    buttons2.style.display = 'none';
    buttons3.style.display = 'none';

  } else {
    buttons.style.display = 'none';
    buttons2.style.display = 'none';
    buttons3.style.display = 'none';
  }
}

function showSpotify2() {
  var buttons = document.querySelector('.spotify');
  var buttons2 = document.querySelector('.spotify2');
  var buttons3 = document.querySelector('.spotify3');
  var bm = document.querySelector('.bm');

  if (buttons2.style.display === 'none') {
    buttons2.style.display = 'grid';
    buttons.style.display = 'none';
    buttons3.style.display = 'none';

  } else {
    buttons2.style.display = 'none';
    buttons.style.display = 'none';
    buttons3.style.display = 'none';
  }
}

function showSpotify3() {
  var buttons = document.querySelector('.spotify');
  var buttons2 = document.querySelector('.spotify2');
  var buttons3 = document.querySelector('.spotify3');
  var bm = document.querySelector('.bm');


  if (buttons3.style.display === 'none') {
    buttons3.style.display = 'grid';
    buttons2.style.display = 'none';
    buttons.style.display = 'none';

  } else {
    buttons3.style.display = 'none';
    buttons2.style.display = 'none';
    buttons.style.display = 'none';
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
  var up2 = document.querySelector('.up2');
  var buttons2 = document.querySelector('.buttons2');
  var b0dy = document.querySelector('body');
  var container = document.createElement("div");
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

  titlec.style.background = "linear-gradient(to right, #000000, #30000057)";
  titlec.style.backgroundImage = "url('resources/images/stack.gif')";
  titlec.style.backgroundSize = "cover";
  titlec.style.backgroundPosition = "center";
  titlec.style.backgroundRepeat = "no-repeat";

  for (var i = 1; i < 4; i++) {
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

