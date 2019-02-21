window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {}
  draw();
};

function draw() {
  var canvas = document.getElementById("route");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "darkgreen";
  ctx.fillRect(0, 0, 20, 200);
  ctx.fillRect(280, 0, 20, 200);
  ctx.fillStyle = "grey";
  ctx.fillRect(20, 0, 5, 200);
  ctx.fillRect(275, 0, 5, 200);
  ctx.fillStyle = "white";
  ctx.fillRect(25, 0, 5, 200);
  ctx.fillRect(270, 0, 5, 200);
  ctx.fillStyle = "grey";
  ctx.fillRect(30, 0, 240, 200);

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.setLineDash([5, 3]);
  ctx.moveTo(150, 0);
  ctx.lineTo(150, 200);
  ctx.stroke();
}
