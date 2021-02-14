// inspired by the coding train's purple rain video
// https://thecodingtrain.com/CodingChallenges/004-purplerain.html
let NUM_DROPS = 300; // number of raindrops
let GRAVITY = 0.09;

let sizes = [];
let positions = [];
let velocities = [];

let acceleration;

function setup() {
  //draw canvas
  createCanvas(400, 400);

  // start the drops with random positions, velocities and sizes
  for (let i = 0; i < NUM_DROPS; i++) {
    positions.push(createVector(random(390, 10), random(200, 10)));
    velocities.push(createVector(0, 1));
    sizes.push(random(2, 10));
  }
  
  // create the acceleration vector
  acceleration = createVector(0, GRAVITY);
}
    
function draw() {
  // set the background as black
  background(0);
  stroke(255, 0, 0);
  
  // iterate through each drop
  for(let i = 0; i < NUM_DROPS; i++){
    // get this drop's position and velocity
    position = positions[i] 
    velocity = velocities[i];
    
    // set the point's size
    strokeWeight(sizes[i]);
  
    // if it is below the bottom of the screen move it to the top and set the speed as 1
    if(position.y > 395){
      position.y = 1;
      velocity.y = 1;
    }
    
    // move the raindrop
    position.add(velocity);
    // increase the raindrop's speed
    velocity.add(acceleration);
    
    // draw the raindrop
    point(position);
  }
}
