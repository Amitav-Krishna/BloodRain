// inspired by the coding train's purple rain video
// made using p5.js
let NUM_DROPS = 300;
let thicbert = [];
let dropPos = [];
let dropVel = [];

let acceleration;

function setup() {
  createCanvas(400, 400);
  var height = 10;
  

  // where is the drop
  
  for (let i = 0; i < NUM_DROPS; i++) {
    dropPos.push(createVector(random(390, 10), random(200, 10)));
    dropVel.push(createVector(0, 1));
    thicbert.push(random(5, 10));
  }
  
  // how much faster it is going and how much its direction is changing
  acceleration = createVector(0, 0.09);
}



    
function draw() {
  background(0);

  //
  for(let i = 0; i < NUM_DROPS; i++){
      
    pos = dropPos[i] 
    velocity = dropVel[i];
    
    stroke(255, 0, 0) 
    strokeWeight(thicbert[i]);
    point(pos);
  
    if(pos.y > 395){

      pos.y = 1;
    }
    if(pos.y <= 1){
      velocity.y = 1;
    }
    pos.add(velocity);
    velocity.add(acceleration);
  }
  
}
