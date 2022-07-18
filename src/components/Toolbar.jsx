import React, {useEffect, useState} from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";
import {observable} from "mobx";

const Toolbar = () => {
    const [pickedTool, setPickedTool] = useState()

    const changeColor = e => {
        toolState.setStrokeColor(e.target.value)
        toolState.setFillColor(e.target.value)
    }


    const changeToolOn = (nameTool) => {
        toolState.setTool(new nameTool(canvasState.canvas, canvasState.socket, canvasState.sessionid) )
    }

    return (
        <div className="toolbar">
            <div >
                <button
                    className="toolbar__btn brush"
                    onClick={() => changeToolOn(Brush)}></button>
            </div>
            <button
                className="toolbar__btn rect"
                onClick={() => changeToolOn(Rect) }></button>
            <button
                className="toolbar__btn circle"
                onClick={() => changeToolOn(Circle) }></button>
            <button
                className="toolbar__btn eraser"
                onClick={() => changeToolOn(Eraser) }></button>
            <button
                className="toolbar__btn line"
                onClick={() => changeToolOn(Line) }></button>

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
            <button className="toolbar__btn save"></button>
        </div>
    );
};

export default Toolbar;