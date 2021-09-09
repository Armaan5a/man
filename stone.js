class Stone
{
    constructor(a,b,c,d)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1.5,
            'density':1.8
        }
        this.body=Bodies.rectangle(a,b,c,d,option);
        World.add(world,this.body);
        this.image = loadImage("plucking mangoes/stone.png");
        this.width=c;
        this.height=d;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("black") 
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();     
    }
}