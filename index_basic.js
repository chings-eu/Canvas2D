const canvas = document.querySelector('.scene2d');
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext('2d');

console.log(canvas, width, height, ctx);

ctx.fillStyle = '#000000';
console.log(ctx.fillStyle)
ctx.fillRect(0, 0, width, height);

// draw red rectangle
ctx.fillStyle = '#ff0000';
ctx.fillRect(50, 50, 100, 150);

// draw green rectangle
ctx.fillStyle = '#00ff00';
ctx.fillRect(75, 75, 100, 100);

// draw red rectangle
ctx.fillStyle = '#ff00ff99';
ctx.fillRect(25, 100, 175, 50);