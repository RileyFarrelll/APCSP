// // // function setup(){
// // // createCanvas(windowWidth, windowHeight)
// // // background('yellow')
// // // createP('this is a cute picture of me')
// // // }
// // // function draw(){
// // //     createP('This is me')
// // // // 
// // // function setup() { 
// // //     createCanvas(400, 400);
// // //     background(220)
// // //     createElement('h1', 'my lucky numbers below');
// // //     createElement('p', 'my lucky number is 7');
// // //   } 
// // //   function draw() { 
// // //     background(220);
// // //   }
// // function setup() {
// //   createCanvas(windowWidth, windowHeight);
// //   let titleText = createElement('h1', 'My lucky number is...');
// //   let numText = createElement('p', '14');
// //   console.log(numText)
// // }
// function setup(){
//   createCanvas(400, 400)
//   createElement('hi', 'my lucky number below')
// }
// function mousePressed(){
//   createP('my lucky number is'+ random(0,10))

// }
// function draw(){
//   background(220);
// }
function setup() {
  createCanvas(windowWidth, windowHeight)
  button = createButton('Try Me');
  button.position(width / 2, height / 2)
  button.mousePressed('hello?')
greeting = createElement('h2', Say Hello)
greeting.position(width/ 2, height/ 3)
textAlign(center)
textSize(50)
}
