var score,foodstock,database;
var link=[]
var x=100
function preload()
{
  dog=loadImage("images/dog.png")
  dog2=loadImage("images/happydog.png")
}

function setup() {
	createCanvas(800, 700);
  dor=createSprite(400,350,50,50)
  dor.scale=.5
  dor.addImage("change",dog)
  database=firebase.database()
  for(i=0;i<800;i=i+50){
  link.push(createSprite(i,100,30,50))
  }
  foodstock=database.ref('food')
  foodstock.on("value",readstock)
}


function draw() {  

 if(keyWentDown(UP_ARROW)){
write(food)
dor.addImage("change",dog2)

x=x-1

 }
 text(x,775,100)
 
  
  drawSprites();
  //add styles here

}

function readstock(data){
  food=data.val()
}
function write(x){
database.ref("/").set({
food:x
})
}

