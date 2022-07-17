import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }

    getTool() {
        console.log(this.tool)
        return this.tool
    }

    setTool(tool) {
        this.tool = tool
    }
    setFillColor(color) {
        this.tool.fillColor = color
    }
    setStrokeColor(color) {
        this.tool.strokeColor = color
    }
    setLineWidth(width) {
        console.log(width)
        this.tool.lineWidth = width
    }


}

export default new ToolState()