var buttons = document.querySelector('.buttons');
var buttons2 = document.querySelector('.buttons2');
var buttons3 = document.querySelector('.buttons3');
var root = document.querySelector('.title');
var title2 = document.querySelector('.title2');
var title3 = document.querySelector('.title3');
var title4 = document.querySelector('.title4');
var icon1 = document.querySelector('.icon');
var icon3 = document.querySelector('.icon3');
var icon4 = document.querySelector('.icon4');
var up = document.querySelector('.up');
var up3 = document.querySelector('.up3');
var up2 = document.querySelector('.up2');


function showLinks() {
  if (buttons.style.display === 'none') {
    icon1.style.display = 'none';
    buttons.style.display = 'grid';
    title2.style.display = 'none';
    root.innerHTML = "~/vim-clown/links/";
    up.style.display = 'grid';
    buttons2.style.display = 'none';
    title3.style.display = 'none';
    icon3.style.display = 'none';
    title4.style.display = 'none';
    icon4.style.display = 'none';
  } else {
    buttons.style.display = 'none';
    title2.style.display = 'grid';
    icon1.style.display = 'grid';
    root.innerHTML = "~/vim-clown";
    buttons2.style.display = 'none';
    title3.style.display = 'grid';
    title4.style.display = 'grid';
    icon3.style.display = 'grid';
    icon4.style.display = 'grid';
    up.style.display = 'none';
  }
}

function showMusic() {
  if (buttons3.style.display === 'none') {
    icon1.style.display = 'none';
    buttons3.style.display = 'grid';
    title2.style.display = 'none';
    root.innerHTML = "~/vim-clown/music/";
    up3.style.display = 'grid';
    buttons2.style.display = 'none';
    title3.style.display = 'none';
    icon3.style.display = 'none';
    title4.style.display = 'none';
    icon4.style.display = 'none';
  } else {
    buttons3.style.display = 'none';
    title2.style.display = 'grid';
    icon1.style.display = 'grid';
    root.innerHTML = "~/vim-clown";
    buttons2.style.display = 'none';
    title3.style.display = 'grid';
    title4.style.display = 'grid';
    icon3.style.display = 'grid';
    icon4.style.display = 'grid';
    up3.style.display = 'none';
  }
}

function showDocs() {
  if (buttons2.style.display === 'none') {
    icon3.style.display = 'none';
    buttons2.style.display = 'grid';
    title3.style.display = 'none';
    title4.style.display = 'none';
    root.innerHTML = "~/vim-clown/documents/";
    buttons.style.display = 'none';
    title2.style.display = 'none';
    icon1.style.display = 'none';
    icon4.style.display = 'none';
    up2.style.display = 'grid';
  } else {
    buttons2.style.display = 'none';
    title3.style.display = 'grid';
    icon3.style.display = 'grid';
    root.innerHTML = "~/vim-clown";
    title4.style.display = 'grid';
    buttons.style.display = 'none';
    title2.style.display = 'grid';
    icon1.style.display = 'grid';
    icon4.style.display = 'grid';
    up2.style.display = 'none';
  }
}



