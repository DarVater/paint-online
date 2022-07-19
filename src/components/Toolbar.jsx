import React, {useEffect, useState} from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const Toolbar = () => {
    const [pickedTool, setPickedTool] = useState(null)

    const changeColor = e => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }


    const changeToolOn = (nameTool) => {
        const newTool = new nameTool(canvasState.canvas, canvasState.socket, canvasState.sessionid)
        setPickedTool(newTool.getClassName())
        toolState.setTool(newTool)
    }

    const download = () => {
        const dataUrl = canvasState.canvas. toDataURL()
        const a = document.createElement('a')
        a.href = dataUrl
        a.download = canvasState.sessionid + ".jpg"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }

    return (
        <div className="toolbar">
            <div className={pickedTool &&
            pickedTool === "Brush" ? "picked" : ''}>
                <button
                    className="toolbar__btn brush"
                    onClick={() => changeToolOn(Brush)}></button>
            </div>
            <div className={pickedTool &&
            pickedTool === "Rect" ? "picked" : ''}>
                <button
                    className="toolbar__btn rect"
                    onClick={() => changeToolOn(Rect) }></button>
            </div>
            <div className={pickedTool &&
            pickedTool === "Circle" ? "picked" : ''}>
                <button
                    className="toolbar__btn circle"
                    onClick={() => changeToolOn(Circle) }></button>
            </div>
            <div className={pickedTool &&
            pickedTool === "Eraser" ? "picked" : ''}>
                <button
                    className="toolbar__btn eraser"
                    onClick={() => changeToolOn(Eraser) }></button>
            </div>
            <div className={pickedTool &&
            pickedTool === "Line" ? "picked" : ''}>
                <button
                    className="toolbar__btn line"
                    onClick={() => changeToolOn(Line) }></button>
            </div>

            <input
                onChange={e => changeColor(e)}
                type="color" style={{marginLeft: 10}}/>
            <button
                className="toolbar__btn undo"
                onClick={() => canvasState.undo()}
            ></button>
            <button
                onClick={() => canvasState.redo()}
                className="toolbar__btn redo"
            ></button>
            <button
                onClick={() => download()}
                className="toolbar__btn save"
            ></button>
        </div>
    );
};

export default Toolbar;