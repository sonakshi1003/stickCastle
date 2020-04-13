const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stand1,stand2,stand3,stand4,stand5,stand6,stand7,stand8,stand9,stand10;
var ground;

function setup(){
    var canvas = createCanvas(1000,580);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Stand(300,320,70,330);
    stand2 = new Stand(920,320,70,330);
    stand3 = new Stand(370,320,70,210);
    stand4 = new Stand(850,320,70,210);
    stand5 = new Stand(440,320,70,210);
    stand6 = new Stand(780,320,70,210);
    stand7 = new Stand(510,320,70,210);
    stand8 = new Stand(710,320,70,210);
    stand9 = new Stand(580,320,70,210);
    stand10 = new Stand(640,320,53,210);


    ground = new Ground(400,height,1200,40);

    }
    
    function draw(){
    background(0);
    Engine.update(engine);
    console.log(stand2.body.position.x);
    console.log(stand2.body.position.y);
    console.log(stand2.body.angle);
    stand1.display();
    stand2.display();
    stand3.display();
    stand4.display();
    stand5.display();
    stand6.display();
    stand7.display();
    stand8.display();
    stand9.display();
    stand10.display();
    ground.display();
}