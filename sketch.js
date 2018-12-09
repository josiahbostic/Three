var xRings = [];
var song;
var img = [];
var i = 0;
var j = 0;
var list = [0,1,2,3];

function preload (){
	song = loadSound('Kobe_Bryant_The_Leader.mp3');
	img[0] = loadImage("KOBE4.jpg");
	img[1] = loadImage("KOBE3.jpg")
	img[2] = loadImage("KOBE5.jpg")
	img[3] = loadImage("KOBE.jpg")
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
	xpos = width / 2;
  ypos = height / 2;
	background(75);
	Cx = windowWidth/2
	Cy = windowHeight/2
	
	xRings[0] = new Rings(Cx,Cy);
	xRings[1] = new Rings(Cx+100,Cy);
	
}

function draw() {
	background(102);
	image(img[j], 150, 50, img.width/2, img.height/2);
	xRings[0].Move(xpos, ypos);
	xRings[0].display();

}


function mousePressed(){
	xRings[i] = new Rings(mouseX,mouseY);
	xRings[i].display();
	i++
	if ( song.isPlaying() ) {
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}


function Rings(X,Y) {
	 this.X = X,
	 this.Y = Y,
	 this.radius = 50;
	 this.xdirection =1;
	 this.ydirection =1;
	 this.xspeed = 5;
   this.yspeed = 5;
	
		
	this.Move = function(mX,mY){
		 this.X = this.X  + this.xspeed * this.xdirection;
     this.Y = this.Y  + this.yspeed * this.ydirection;
    if (this.X > width - this.radius || this.X < this.radius) {
      this.xdirection *= -1;
		//	image(random(img), 300, 50);
			if (j == 3){
				j = 0
   			 }
 			else{j++};
		}
		
    if (this.Y  > height - this.radius || this.Y  < this.radius) {
      this.ydirection *= -1;
			//image(random(img), 300, 50);
				if (j == 3){
				j = 0
   			 }
 			else{j++};
    }
	}
	
this.display = function (){
	
	noFill();
	strokeWeight(25);
	//ellipse 1 BLACK
	stroke(0);   
	ellipse(this.X,this.Y,this.radius,this.radius);
	
	//ellipse 2 BLUE
	stroke(50,130,255);
	ellipse(this.X-150,this.Y,this.radius,this.radius);
	
	//ellipse 3 RED
	stroke(255,0,58); 
	ellipse(this.X+150,this.Y,this.radius,this.radius);
  
	//ellipse 4 GREEN
	   stroke(0,200,0);
	  ellipse(this.X+75,this.Y+100,this.radius,this.radius);

	//ellipse 5 GOLD
	  stroke(255,200,0);
	  ellipse(this.X-75,this.Y +100,this.radius,this.radius);
 }
}
