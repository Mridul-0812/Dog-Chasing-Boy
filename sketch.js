var dog;
var AngryDog;
var ManNow;
var man;
var barrier;
var sun;
var path;
var Time = 1
var jadu;
var newJadu;
var magic;
var dogImg, ManImg, barrierImg, sunImg;
var gamestate = "serve"

function preload(){
dogImg = loadAnimation("DoggyGif.gif")
AngryDogImg = loadImage("AngryDog.png")
ManNowImg = loadImage("ManNow.png")
ManImg = loadAnimation("ManRunning.gif")
barrierImg = loadImage("barrier.png")
sunImg = loadImage("sun.png")
}

function setup() {
 createCanvas(1000, 500)

 dog = createSprite(100, 310)
 dog.addAnimation("dog", dogImg)

 AngryDog = createSprite(100, 310)
 AngryDog.addImage("AngryDog", AngryDogImg)

ManNow = createSprite(250, 310)
ManNow.addImage("ManNow", ManNowImg)

 man = createSprite(550, 235)
 man.addAnimation("man", ManImg)

 barrier = createSprite(1000, 345)
 barrier.addImage("barrier", barrierImg)

 sun = createSprite(950, 45)
 sun.addImage("sun", sunImg)

 path = createSprite(731.5, 370, 1463, 57.5)

 jadu = createSprite(250, 0, 1000, 20  )

 magic = createSprite(550, 252, 40, 180)

 newJadu = createSprite(100, 310, 10, 65)
}

function draw() {
 background("skyblue")
 drawSprites()
 dog.scale = 0.6
 barrier.scale = 0.25
 sun.scale = 0.275
 man.scale = 1
 ManNow.scale = 0.45
 AngryDog.scale = 0.5

jadu.debug = true
man.debug = 1

 path.depth = path.depth
 dog.depth = path.depth+1
 barrier.depth = path.depth+1
 man.depth = path.depth+1
 AngryDog.depth = path.depth+1
 ManNow.depth = path.depth+1

 if (gamestate === "serve") {
    textSize(75)
    fill("black")
    text("Click SPACE to start gaming!", 20, 250)
    barrier.visible = false
    dog.visible = false
    man.visible = false
    ManNow.visible = false
    AngryDog.visible = false
 }

 if (gamestate === "play") {
    textSize(20)
    fill("black")
    text(Math.round(Time), 20, 20)
    Time = Time+0.028
    ManNow.visible = false
    AngryDog.visible = false
 }

 man.debug = false
 barrier.debug = true

 newJadu.visible = false

if (gamestate === "serve") {
    if (keyDown("Space")) {
        gamestate = "play"
        barrier.visible = true
        dog.visible = true
        man.visible = true
    }
}

if (Time > 5 && Time < 15) {
    barrier.velocityX = -20
}

if (Time > 14 && Time > 40) {
    barrier.velocityX = -30
}

jadu.visible = false
magic.visible = false

if (gamestate === "play") {
    barrier.VelocityY = 0
    barrier.velocityX = -20
}

if (magic.isTouching(barrier)) {
    magic.x = magic.x-6.5
    magic.x = magic.x
    man.x = man.x-5.5
    man.x - man.x
}

if (man.x < 235) {
    gamestate = "end"
    barrier.visible = false
    man.visible = false
    dog.visible = false
}

if (gamestate === "end") {
    textSize(25)
    fill("black")
    text("Nicely played! Game over!", 20, 20)
    ManNow.visible = true
    AngryDog.visible = true
}

if (barrier.x < 1) {
    barrier.x = 1000
}

    if(keyDown("up_arrow")) {
        man.velocityY = -13;
        magic.velocityY = -13
}

if (magic.isTouching(jadu)) {
magic.velocityY = 13
man.velocityY = 13
}

if (magic.isTouching(path) && magic.velocityY > 0) {
    magic.collide(path)
    man.velocityY = 0
}


if (barrier.x === 400) {
    dog.velocityY = -19
    newJadu.velocityY = -19
}

if (gamestate === "play") {
    dog.y = newJadu.y
}

if (newJadu.isTouching(jadu)) {
    newJadu.velocityY = 19
    dog.velocityY = 19
    }
if (newJadu.isTouching(path) && newJadu.velocityY > 0) {
    dog.velocityY = 0 
    newJadu.collide(path)  
}

}