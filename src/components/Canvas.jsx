import React, {useEffect, useRef, useState} from 'react';
import "../styles/canvas.scss"
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";
import Rect from "../tools/Rect";

const Canvas = observer(() => {
    const canvasRef = useRef()
    const usernameRef = useRef()
    const [modal, setModal] = useState(true)

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
    }, [])

    const params = useParams()

    useEffect(() => {
        if (canvasState.userName) {
            const socket = new WebSocket('ws://localhost:5000')
            canvasState.setSocket(socket)
            canvasState.setSessionid(params.id)
            toolState.setTool(new Brush(canvasRef.current, socket, params.id))
            socket.onopen = () => {
                socket.send(JSON.stringify({
                    id: params.id,
                    username: canvasState.userName,
                    method: "connection"
                }))
            }
            socket.onmessage = (event) => {
                console.log(event.data)
                let msg = JSON.parse(event.data)
                console.log(msg)
                switch (msg.method) {
                    case "connection":
                        console.log(`Пользователь ${msg.username} полключился`)
                        break
                    case "draw":
                        drawHandler(msg)
                        break
                }
            }
        }
    }, [canvasState.userName])

    const drawHandler = (msg) => {
        const figure = msg.figure
        const ctx = canvasRef.current.getContext("2d")
        switch (figure.type){
            case "brush":
                Brush.draw(ctx, figure.x, figure.y)
                break
            case "finish":
                ctx.beginPath()
                break
            case "rect":
                Rect.staticDraw(
                    ctx,
                    figure.x, figure.y,
                    figure.width, figure.height,
                    figure.color
                )
                break
        }
    }

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    const connectionHandler = () => {
        console.log(usernameRef.current.value)
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