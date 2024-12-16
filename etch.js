var value;
function updateTextInput(val) {
     value=document.getElementById('sizes').innerHTML=val; 
}
// var temp;
// function resetedbg(){
//     temp=document.getElementById('bgcolors').value='#FFFFFF';
//     document.getElementById('draw').style.background=temp;
// }

// const colorPicker = document.getElementById('bgcolors');
// colorPicker.addEventListener('input', function() {
//   document.getElementById('draw').style.backgroundColor = colorPicker.value;});

// function brush(){
//     var br=document.getElementById("colors");
//     alert(br.value);
//     document.getElementById("brushed").style.display='black';
// }

// function resetedcg(){
//     document.getElementById('colors').value='#000000';
//     var z=document.getElementById('bgcolors').value=colorPicker.value;
//     document.getElementById('draw').style.background=z;
//     alert(colorPicker.value);
// }


let cellSize = value; // Default size of the cells
let brushColor = "#000000"; // Default color (light coral)
let isDrawing = false; // Track if the mouse is pressed
let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 

        // Function to create the grid dynamically based on the range input
function makeGrid() {
    cellSize = document.getElementById('ranger').value;
    document.getElementById('sizes').innerHTML = cellSize;
    createCanvas(); // Recreate the canvas with the new cell size
}
 
        // Function to create the drawing area
function createCanvas() {
    const canvas = document.getElementById("drawCanvas");
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
 
            // Remove existing grid cells if they exist
    canvas.innerHTML = '';
 
            // Calculate the number of cells based on the current cell size
    const numCellsX = Math.floor(canvasWidth / cellSize);
    const numCellsY = Math.floor(canvasHeight / cellSize);
 
            // Create individual "cells" to act as drawing points
    for (let y = 0; y < numCellsY; y++) {
        for (let x = 0; x < numCellsX; x++) {
            const drawCell = document.createElement("div");
            drawCell.classList.add("drawCell");
            drawCell.style.width = `${cellSize}px`;
            drawCell.style.height = `${cellSize}px`;
            drawCell.style.left = `${x * cellSize}px`;
            drawCell.style.top = `${y * cellSize}px`;
            canvas.appendChild(drawCell);
        }
    }
    function brush1(){
        var br=document.getElementById("colors");
        document.getElementById("brushed").style.display='black';
    }
}
 
        // Function to start drawing
function startDrawing(event) {
    isDrawing = true;
    draw(event); // Draw immediately when mouse is down
}
 
        // Function to stop drawing
function stopDrawing() {
    isDrawing = false;
}
 
        // Function to draw on the cells
function draw(event) {
    if (isDrawing) {
        const cell = event.target;

        if (cell.classList.contains("drawCell") && !cell.classList.contains("drawing")) {
            cell.style.backgroundColor = brushColor; // Use the current brush color
        }
    }
}
 
        // Function to set the brush color
function brush() {
    brushColor = document.getElementById('colors').value;
}

function startRainbow() {
    rainbowMode = true;
    rainbowIndex = 0; // Reset the rainbow index
    brushColor = rainbowColors[rainbowIndex]; // Set the first color
    setInterval(() => {
        if(rainbowMode){
            
                brushColor = rainbowColors[rainbowIndex];
                rainbowIndex = (rainbowIndex + 1) % rainbowColors.length;
        }
    }, 500);
}

function stopRainbow() {
    rainbowMode = false;
}
 
// function startRainbow() {
//     let letters = '0123456789ABCDEF';
//     let rcolor = '#';
//     for (let i = 0; i < 6; i++) {
//         rcolor += letters[Math.floor(Math.random() * 16)];
//     }
//     // return rcolor; 
//     cell.style.backgroundColor = rcolor;
// }

        // Initialize the canvas with default size
createCanvas();
 
        // Get the drawing area
        const canvas = document.getElementById("drawCanvas");
 
        // Add mouse events for drawing
        canvas.addEventListener("mousedown", startDrawing); // Start drawing on mouse down
        canvas.addEventListener("mouseup", stopDrawing);    // Stop drawing on mouse up
        canvas.addEventListener("mouseleave", stopDrawing); // Stop drawing if the mouse leaves the canvas
        canvas.addEventListener("mousemove", draw);
        // canvas.addEventListener("mousemove", startRainbow);   

