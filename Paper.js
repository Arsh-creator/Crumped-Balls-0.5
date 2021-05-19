class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'density': 1.2,
            'friction': 0.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);

        fill("yellow");

        circle(this.body.position.x, this.body.position.y, this.radius);
    }

};