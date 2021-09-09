class Rubberband{
    constructor(bodyB, PointA){
        var options = {
            bodyB:bodyB,
            pointA:PointA,
            stiffness:0.1,
            length:10
        }
        this.PointA=PointA
        this.bodyB=bodyB
        this.rubberband =Matter.Constraint.create(options);
        World.add(world, this.rubberband);
    }
 
    fly(){
        this.rubberband.bodyB = null;
    }
 
    attach(body){
        this.rubberband.bodyB = body
    }
    
    display(){ 
            if(this.rubberband.bodyB){
        var pointA = this.rubberband.pointA
            var PointB = this.rubberband.bodyB;
            stroke("White")
            strokeWeight(4);
           line(pointA.x, pointA.y,PointB.x, PointB.y);        
    }}}