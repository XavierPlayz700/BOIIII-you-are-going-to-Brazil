class Launcher {

    constructor(body, anchor) {
        
        var options = {
            bodyA : body,
            pointB : anchor,
            // Wow 
            stiffness : 0.004,
            length : 0.25
        }

        this.bodyA = body;
        this.pointB = anchor;

        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);

        this.image = loadImage("images/boy.png");

    }

    attach (body) {
       this.launcher.bodyA = body;
    }

    fly () {
       this.launcher.bodyA = null;
    }

    display () {
       
       image(this.image, 200, 550);

       if (this.launcher.bodyA){

          var pointA = this.launcher.bodyA.position;
          var pointB = this.pointB;

          push();
          strokeWeight(3);
          stroke("black");
          line(pointA.x, pointA.y, pointB.x, pointB.y);
          pop();

       }

    }

}