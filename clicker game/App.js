let bananaImg
let heading
function setup(){
createCanvas(windowWidth, windowHeight)
bananaImg = createImg('banana.png','banana image')
bananaImg.Size(200,100)
heading= createElement('h2', 'Click The Banana!')
heading.position(width / 3, height / 4)
button.mousePressed(youWon)
}
function draw(){
bananaImg.position(random(width), random(height))

}
function youWon(){
    heading.html(youwon)
    bananaImg.remove()
}