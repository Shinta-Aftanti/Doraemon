//Shinta Aftanti
//119160034

let j;
function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0;
}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(5);
  line (200,0,200,200);

 
  strokeWeight (2)
 //DIAM(KIRI)
  //lengan
  fill(0,191,255);
  ellipse (71,109,28,36);
  ellipse (129, 109,28,36);
  //tangan
  fill (255);
  ellipse (57,118,16,16); 
  ellipse (143,118,16,16);  
  //kaki 
  fill (255,255,255);
  ellipse (77,155,36,15);
  ellipse (121,155,36,15);
  //badan
  fill (0,191,255);
  ellipse (100,117,72,75);
  fill(255,255,255);
  ellipse (100,114,65,60);
  fill (255,0,0);
  rect (67.5,85,65,8);
  //kepala
  fill(0,191,255);
  ellipse (100,57,80,70);
  fill (255,255,255);
  ellipse (100,62,76,60);
  //mata
  fill (255,255,255);
  ellipse(92,36,16,20);
  ellipse(109,36,16,20);
  fill (20);
  ellipse(89,37,6,12);
  ellipse(106,37,6,12);
  //hidung
  fill(255,0,0)
  ellipse(100,49,12,11.2);
  //bibir
  fill(255,255,255);
  arc (100,64,60,40,0,600);
  line (100,54,100,83);
  //kumis
  strokeWeight(1)
  line (104,58,117,55);
  line (104,60,119,58);
  line (104,62,118,62);
  line (96,58,83,55);
  line (96,60,81,58);
  line (96,62,82,62);
  //kantong
  fill (255,255,255);
  ellipse (100,117,48,35);
  strokeWeight (0);
  rect (74,99,51,17);  
   //bandul
   strokeWeight (2)
   stroke (0,0,0);
   fill (255,255,0);
   ellipse (100,95,13,13);


//GERAK (KANAN)
  //lengan
  fill(0,191,255);
  ellipse (271,109,28,36);
  ellipse (329, 109,28,36);
  //tangan
  fill (255);
  ellipse (257,118,16,16); 
  ellipse (343,118,16,16);  
  //kaki 
  fill (255,255,255);
  ellipse (277,155,36,15);
  ellipse (321,155,36,15);
  //badan
  fill (0,191,255);
  ellipse (300,117,72,75);
  fill(255,255,255);
  ellipse (300,114,65,60);
  fill (255,0,0);
  rect (267.5,85,65,8);
  //kepala
  fill(0,191,255);
  ellipse (300,57,80,70);
  fill (255,255,255);
  ellipse (300,62,76,60);
  //mata
  fill (255,255,255);
  ellipse(292,36,16,20);
  ellipse(309,36,16,20);
  fill (20);
  var r = 20+4*Math.sin(PI*j/35);
  j+=1;
  ellipse(271+r,37,6,12);
  ellipse(289+r,37,6,12);
  //hidung
  fill(255,0,0)
  ellipse(300,49,12,11.2);
  //bibir
  fill(255,255,255);
  arc (300,64,60,40,0,600);
  line (300,54,300,83);
  //kumis
  strokeWeight(1)
  line (304,58,317,55);
  line (304,60,319,58);
  line (304,62,318,62);
  line (296,58,283,55);
  line (296,60,281,58);
  line (296,62,282,62);
  //kantong
  fill (255,255,255);
  ellipse (300,117,48,35);
  strokeWeight (0);
  rect (274,99,51,17);
   //bandul
   strokeWeight (2)
   stroke (0,0,0);
   fill (255,255,0);
   ellipse (300,95,13,13);


}
