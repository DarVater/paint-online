export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.filling = true
        this.ctx = canvas.getContext('2d')
    }

    set fillColor(color) {
        this.ctx.fillStyle = color
    }
    set setFilling(value) {
        this.filling = value
    }
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }
    set lineWidth(width) {
        this.ctx.lineWidth = width
    }

    destroyEvents() {
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
}