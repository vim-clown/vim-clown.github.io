var window1 = document.querySelector('.spotify');
var window2 = document.querySelector('.spotify2');
var window3 = document.querySelector('.spotify3');
var icon5_1 = document.querySelector('.icon5_1');
var icon5_2 = document.querySelector('.icon5_2');
var icon5_3 = document.querySelector('.icon5_3');

function showSpotify() {
  if (window1.style.display === 'none') {
    window1.style.display = 'grid';
    icon5_3.style.display = 'none';
    icon5_2.style.display = 'none';
    icon5_1.style.display = 'none';
    window2.style.display = 'none';
    window3.style.display = 'none';
  } else {
    window1.style.display = 'none';
  }
}

function showSpotify2() {
  if (window2.style.display === 'none') {
    window2.style.display = 'grid';
    icon5_3.style.display = 'none';
    icon5_2.style.display = 'none';
    icon5_1.style.display = 'none';
    window1.style.display = 'none';
    window3.style.display = 'none';
  } else {
    window2.style.display = 'none';
  }
}

function showSpotify3() {
  if (window3.style.display === 'none') {
    window3.style.display = 'grid';
    icon5_3.style.display = 'none';
    icon5_2.style.display = 'none';
    icon5_1.style.display = 'none';
    window2.style.display = 'none';
    window1.style.display = 'none';
  } else {
    window3.style.display = 'none';
  }
}

function clearWindow1() {
  window1.style.display = 'none';
  icon5_3.style.display = 'none';
  icon5_2.style.display = 'none';
  icon5_1.style.display = 'grid';
  icon5_1.classList.add("rotated");
  icon5_1.style.transition = "transform 0.5s";
  icon5_1.style.transform = "rotate(360deg)";
}

function clearWindow2() {
  window2.style.display = 'none';
  icon5_3.style.display = 'none';
  icon5_2.style.display = 'grid';
  icon5_1.style.display = 'none';
  icon5_2.classList.add("rotated");
  icon5_2.style.transition = "transform 0.5s";
  icon5_2.style.transform = "rotate(360deg)";
}

function clearWindow3() {
  window3.style.display = 'none';
  icon5_3.style.display = 'grid';
  icon5_2.style.display = 'none';
  icon5_1.style.display = 'none';
  icon5_3.classList.add("rotated");
  icon5_3.style.transition = "transform 0.5s";
  icon5_3.style.transform = "rotate(360deg)";
}

function showWindow1() {
  icon5_1.classList.add("rotated");
  icon5_1.style.transition = "transform 0.5s";
  icon5_1.style.transform = "rotate(360deg)";
  window1.style.display = 'grid';
  icon5_1.style.display = 'none';
  icon5_2.style.display = 'none';
  icon5_3.style.display = 'none';
}

function showWindow2() {
  icon5_2.classList.add("rotated");
  icon5_2.style.transition = "transform 0.5s";
  icon5_2.style.transform = "rotate(360deg)";
  window2.style.display = 'grid';
  icon5_1.style.display = 'none';
  icon5_2.style.display = 'none';
  icon5_3.style.display = 'none';
}

function showWindow3() {
  icon5_3.classList.add("rotated");
  icon5_3.style.transition = "transform 0.5s";
  icon5_3.style.transform = "rotate(360deg)";
  window3.style.display = 'grid';
  icon5_1.style.display = 'none';
  icon5_2.style.display = 'none';
  icon5_3.style.display = 'none';
}