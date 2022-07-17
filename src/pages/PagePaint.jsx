import React from 'react';
import Toolbar from "../components/Toolbar";
import SettingBar from "../components/SettingBar";
import Canvas from "../components/Canvas";

const PagePaint = () => {
    console.log(11111111)
    return (
        <div className="App">
            <Toolbar></Toolbar>
            <SettingBar></SettingBar>
            <Canvas></Canvas>
        </div>
    );
};

export default PagePaint;