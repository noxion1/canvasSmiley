let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


//oor
context.beginPath();
context.arc(50,180,50,0,2*Math.PI);
context.fillStyle = "#7CFC00";
context.fill();
context.closePath();
context.stroke();
//oor
context.beginPath();
context.arc(340,180,50,0,2*Math.PI);
context.fillStyle = "#7CFC00";
context.fill();
context.closePath();
context.stroke();

//hoofd
context.beginPath();
context.arc(200,190,150,0,2*Math.PI);
context.fillStyle = "#F0E68C";
context.fill();
context.closePath();
context.stroke();
//oog
context.beginPath();
context.arc(280,130,20,0,2*Math.PI);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();
context.stroke();
//oog
context.beginPath();
context.arc(140,130,20,0,2*Math.PI);
context.fillStyle = "#FF0000";
context.fill();
context.closePath();
context.stroke();

//mond
context.beginPath();
context.arc(200,280,100,3,2*Math.PI);
context.fillStyle = "#FFFFFF";
context.fill();
context.closePath();
context.stroke();

//mond
context.beginPath();
context.arc(200,270,100,3,2*Math.PI);
context.fillStyle = "#000000";
context.fill();
context.closePath();
context.stroke();

//haar 1
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(200, 18, 1, 20);

//haar 2
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(210, 19, 1, 20);

//haar 3
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(220, 20, 1, 20);

//haar 4
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(230, 21, 1, 20);

//haar 5
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(240, 24, 1, 20);

//haar 6
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(250, 27, 1, 20);

//haar 7
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(190, 19, 1, 20);

//haar 8
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(180, 20, 1, 20);

//haar 9
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(170, 21, 1, 20);

//haar 10
context.lineWidth=5;
context.strokeStyle="#8B4513";
context.strokeRect(160, 24, 1, 20,);
