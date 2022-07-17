import Tool from "./Tool";

export default class Eraser extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseUpHandler(e) {
        this.mouseDown  = false
    }
    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(
            e.pageX - e.target.offsetLeft,
            e.pageY - e.target.offsetTop
        )
    }
    mouseMoveHandler(e) {
        if(this.mouseDown){
            this.draw(
                e.pageX - e.target.offsetLeft,
                e.pageY - e.target.offsetTop)
        }
    }

    draw( x, y) {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle="rgba(255,255,255,1)";
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
        this.ctx.strokeStyle="rgba(0,0,0,1)";
        console.log('draw eraser')
    }

}