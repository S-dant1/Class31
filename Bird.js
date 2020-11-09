class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory=[];
    //p1,p2,p3....pn    //p1=x1,y1 
    //[p1,p2,p3,p4....pn]
    //[[x1,y1],[x2,y2]............ [xn,yn]]

  //  this.trajectory[0][0]
  }
    //p1,p2,p3,p4,p5.....
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var position=[this.body.position.x,this.body.position.y]  
    //var pos = [x,y]
     this.trajectory.push(position);
     //[x1,y1].........[xn,yn]
    for (var i=0; i<this.trajectory.length;i++){
     image (this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
  }
}
