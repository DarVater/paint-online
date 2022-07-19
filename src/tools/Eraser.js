import Brush from "./Brush";

export default class Eraser extends Brush {
    constructor(canvas) {
        super(canvas);
        this.className = 'Eraser'
    }
    getClassName() {
        return this.className
    }


    draw( x, y) {
        this.ctx.strokeStyle="white";
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }

}