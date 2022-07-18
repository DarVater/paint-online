import Tool from "./Tool";

export default class Line extends Tool {
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
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler(e) {
        if(this.mouseDown){
            let currentX = e.pageX - e.target.offsetLeft
            let currentY = e.pageY - e.target.offsetTop
            this.draw(this.startX, this.startY, currentX, currentY)
        }
    }

    draw( x, y, w, h) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.strokeStyle="rgba(0,0,0,1)";
            this.ctx.lineWidth = 1; // толщина линии
            this.ctx.moveTo(this.startX, this.startY)
            this.ctx.lineTo(w, h)
            this.ctx.stroke()
            console.log('draw line')
        }
    }

}