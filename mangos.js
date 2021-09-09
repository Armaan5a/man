class Mangoes{
    constructor(a,b,c)
    {
        var option={
            "isStatic" : true,  
            'restitution' : 1,
            'friction': 1.5,
            'density':0.8
        }
        this.body=Bodies.circle(a,b,c,option);
        World.add(world,this.body);
        this.image = loadImage("plucking mangoes/mango.png");
        this.rad=c
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("blue") 
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.rad,this.rad-5);
        pop();     
    }
}
