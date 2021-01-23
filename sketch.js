
//const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var ground

function preload(){

}


function setup(){
 createCanvas(1000,800);

   
 //engine = Engine.create();
 world = engine.world;
    ground=new Ground(400,750,400,10)

   // Engine.run(engine);
    
}
function draw(){
    background(56,44,44);



    drawSprites();
}
