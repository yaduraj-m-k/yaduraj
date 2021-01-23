class SlingShot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness:0.04
        }
        this.point2= point2;
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png")
        this.sling= Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA= null;
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.point2;
            push();
            stroke(48,28,17);
            if(pointA.x<220){
                strokeWeight(8);
                line(pointA.x-25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x-25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            }else{
                strokeWeight(4);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x+30,pointA.y-10,15,30)
            }
            pop();
        }
    }

}