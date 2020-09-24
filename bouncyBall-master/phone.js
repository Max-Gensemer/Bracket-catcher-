class   Dog {

constructor(clock,mouse,string,ball){
   
    var ball_options ={
        restitution: 0.8, 
        friction: 1.5,
        density: 0.5
    }

    this.ball = Bodies.rectangle(clock,mouse,string,ball, ball_options);   
    this.clock = string;
    this.mouse = ball;
    

    World.add(world,this.ball);

  
}

red (){
    push ();
    rotate (this.ball.angle);
    translate (this.ball.position.x, this.ball.position.y);
    rectMode(CENTER);
    rect(0,0,this.clock,this.mouse);
    pop ();

}



    

}