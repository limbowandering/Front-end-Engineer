let canvas;
let context;

window.onload = function() {

  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");


  canvas.onmousedown = startDrawing;
  canvas.onmouseup = stopDrawing;
  canvas.onmouseout = stopDrawing;
  canvas.onmousemove = draw;
};

let isDrawing = false;

function startDrawing(e) {

  isDrawing = true;

  context.beginPath();


  context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function stopDrawing() {
  isDrawing = false;
}

function draw(e) {
  if (isDrawing == true) {

    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;


    context.lineTo(x, y);
    context.stroke();
  }
}

let previousColorElement;

function changeColor(color, imgElement) {
  context.strokeStyle = color;

  imgElement.className = "Selected";

  if (previousColorElement != null) previousColorElement.className = "";
  previousColorElement = imgElement;
}

let previousThicknessElement;

function changeThickness(thickness, imgElement) {
  context.lineWidth = thickness;

  imgElement.className = "Selected";

  if (previousThicknessElement != null) previousThicknessElement.className = "";
  previousThicknessElement = imgElement;
}


function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
  let imageCopy = document.getElementById("savedImageCopy");

  imageCopy.src = canvas.toDataURL();

  let imageContainer = document.getElementById("savedCopyContainer");
  imageContainer.style.display = "block";
}

