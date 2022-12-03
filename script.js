function showButtons(icon) {
    var buttons = document.querySelector('.buttons');
    if (buttons.style.display === 'none') {
      // Rotate the image by 90 degrees
      icon.classList.add("rotated");
      icon.style.transform = "rotate(90deg)";
      buttons.style.display = 'block';
    } else {
      buttons.style.display = 'none';
      // Rotate the image back to its original orientation
      icon.classList.remove("rotated");
      icon.style.transform = "rotate(0deg)";
    }
}