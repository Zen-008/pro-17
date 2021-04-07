var knife, knifeImage
var f1,f2,f3,f4
var a1,a2
var score=0
var gameState="play"
var gameover
var swordSound,sw2

function preload(){
knifeImage=loadImage("sword.png");  
f1=loadImage("fruit1.png") 
f2=loadImage("fruit2.png") 
f3=loadImage("fruit3.png") 
f4=loadImage("fruit4.png") 

  a1=loadImage("alien1.png")
  a2=loadImage("alien2.png")

  
  swordSound=loadSound ("knifeSwooshSound.mp3")
  sw2=loadSound("gameover.mp3")
  
  gameover=loadImage("gameover.png")
}

function setup(){
createCanvas(600,600);  
knife=createSprite(45,50,5,10)
knife.addImage(knifeImage);
fruitGroup=new Group ()
MGroup=new Group ()
}



function draw(){
background("black");
fill("white");
  text("score:"+score,500,20)
 if(gameState==="play"){
     

  
  knife.x=mouseX
knife.y=mouseY

spawnFruits()
spawnmonster()

  
 if(knife.isTouching(fruitGroup)){
   score=score+1
 fruitGroup.destroyEach()
 swordSound.play()
 } 

if(knife.isTouching(MGroup)){
gameState="end"
sw2.play() 

} 
 }
if (gameState==="end"){
MGroup.setVelocityXEach(0)
fruitGroup.setVelocityXEach(0)
  MGroup.destroyEach()
 fruitGroup.destroyEach()
knife.addImage(gameover)
}
drawSprites()
}

function spawnFruits(){
if(frameCount%60===0) {
 
  
  fruit=createSprite(600,345,5,10);
  
  
r1=Math.round(random(1,2))
  if(r1===1){
  fruit.x=600
  fruit.velocityX=-4-score/4 
    
    
  }
 
  if(r1===2){
  fruit.x=0
  fruit.velocityX=4+score/4 
    
    
  }
  
  
fruit.y=Math.round(random(100,500));
fruit.lifetime=160;
r=Math.round(random(1,4))
fruit.scale=0.3
  
  if(r===1){
 fruit.addImage(f1) 
  
}

if(r===2){
 fruit.addImage(f2) 
  
}  
  
if(r===3){
 fruit.addImage(f3) 
  
}  

if(r===4){
 fruit.addImage(f4) 
  
}
fruitGroup.add(fruit)


}
  

  
//frame count 300   
// 
}
function spawnmonster(){
if(frameCount%150===0) {
  monster=createSprite(600,345,5,10);
monster.velocityX=-4-score/8
monster.y=Math.round(random(100,500));
monster.lifetime=160;
r=Math.round(random(1,2))
//fruit.scale=0.3
  
  if(r===1){
 monster.addImage(a1) 
  
}

if(r===2){
 monster.addImage(a2) 
  
}  
 MGroup.add(monster) 



}

}


