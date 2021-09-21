class playerBase {
constructor(x, y, w, h){
    var options = {
        isStatic :true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = 200;
        this.h = 200;
        this.image = loadImage("./assets/base1.png");
}
display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push()
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
    pop();

}
}