function preload() {
}

function setup() {
canvas=createCanvas(800, 700);
canvas.center();
video = createCapture(VIDEO);
video.center;
video.hide();
}

function draw() {
image(video, 250, 200, 350, 300);

fill(56, 122, 98);
stroke(56, 100, 98)
circle(50, 50, 100);
circle(750, 50, 100);
circle(50, 650, 100);
circle(750, 650, 100);

fill(4, 32, 77);
stroke(4, 32, 100);
rect(95, 25, 610, 50);
rect(725, 95, 50, 510);
rect(95, 625, 610, 50);
rect(25, 95, 50, 510);

fill(77, 4, 4);
stroke(100, 4, 4);
ellipse(400, 125, 600, 50);
ellipse(400, 575, 600, 50);
}

function takeSnapshot() {
    save('myImage.png');
}

