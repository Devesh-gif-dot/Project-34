class rope {
    constructor(bodyA, pointB){

        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 100    
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var posA = this.chain.bodyA.position;
        strokeWeight(3);
        stroke('black');
        line(posA.x,posA.y-25,this.pointB.x,this.pointB.y)
    }

}