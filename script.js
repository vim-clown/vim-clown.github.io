function showButtons(icon) {
    var buttons = document.querySelector('.buttons');
    var title = document.querySelector('.title2');
    var root = document.querySelector('.title');
    var titleb = document.querySelector('.titleb');

    var buttons1 = document.querySelector('.buttons2');
    var title1 = document.querySelector('.title3');

    var ic = document.querySelector('.icon3');

    if (buttons.style.display === 'none') {
      icon.classList.add("rotated");
      icon.style.transform = "rotate(90deg)";
      buttons.style.display = 'grid';
      title.style.display = 'none'
      root.style.display = 'none'
      titleb.style.display = 'grid'

      buttons1.style.display = 'none';
      title1.style.display = 'none';
      ic.style.display = 'none' 
    } else {
      buttons.style.display = 'none';
      title.style.display = 'grid'
      icon.classList.remove("rotated");
      icon.style.transform = "rotate(0deg)";
      titleb.style.display = 'none'
      root.style.display = 'grid'

      buttons1.style.display = 'none';
      title1.style.display = 'grid';
      ic.style.display = 'grid'
    }
}

function showEmpty(icon) {
  var buttons = document.querySelector('.buttons2');
  var title = document.querySelector('.title3');
  var root = document.querySelector('.title');
  var titlec = document.querySelector('.titlec');

  var buttons1 = document.querySelector('.buttons');
  var title1 = document.querySelector('.title2');

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
    ic.style.display = 'none' 


  } else {
    buttons.style.display = 'none';
    title.style.display = 'grid';
    icon.classList.remove("rotated");
    icon.style.transform = "rotate(0deg)";
    titlec.style.display = 'none';
    root.style.display = 'grid';

    buttons1.style.display = 'none';
    title1.style.display = 'grid';
    ic.style.display = 'grid'
  }
}