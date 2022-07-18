import React, {useEffect, useRef, useState} from 'react';
import "../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Canvas = observer(() => {
    const canvasRef = useRef()
    const usernameRef = useRef()
    const [modal, setModal] = useState(true)

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    useEffect(() => {

    }, [])

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    const connectionHandler = () => {
        canvasState.setUserName(usernameRef.current.value)
        setModal(false)
    }

    return (
        <div className="canvas">

            <Modal show={modal} onHide={() => {}}>
                <Modal.Header closeButton>
                    <Modal.Title>Введите ваше имя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref={usernameRef} type="text"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectionHandler()}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
            <canvas
                ref={canvasRef}
                onMouseDown={() => mouseDownHandler()}
                width={600} height={400}></canvas>

        </div>
    );
});

export default Canvas;