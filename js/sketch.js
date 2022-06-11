let xbola = 300;
let ybola = 200;
let diametro = 14;
let velocidadexbola = 5;
let velocidadeybola = 5;

function setup() {
  // put setup code here
  createCanvas(400,600);
}

function draw() {
  // put drawing code here
  background(15);
  circle(xbola,ybola,diametro);
  xbola += velocidadexbola;
  ybola += velocidadeybola;
}