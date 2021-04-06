const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hour ;

function preload() {
    backgroundImg = loadImage("sunrise1.png");
    backgroundImg = loadImage("sunset12.png") ;
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
  

    Engine.update(engine);



    fill("black");
    textSize(30);
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

    



async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await responseJSOn.datetime;
    var hour = datetime.slice(11,13);
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png"; 
        }
    else{
        bg = "sunset12.png";
    }
  
    
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
