class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }
    attach(body){
        this.chain.bodyA = bodyA;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("black");
            push();
            if(pointA.x < 220) {
                strokeWeight(0.1);
              line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);             
            } else {
                strokeWeight(0);
                line(pointA.x+5, pointA.y, pointB.x-10, pointB.y);
            }
            pop();
        }
    }
    
}