function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
  document.getElementById("demo").innerHTML = "Started to drag the text";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "The text was dropped";
}