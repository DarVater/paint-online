import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="setting-bar" >
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e => toolState.setLineWidth(e.target.value)}
                style={{margin: '0 10px'}}
                id="line-width"
                type='range' defaultValue={1} min={1} max={50}/>
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input
                onChange={e => toolState.setStrokeColor(e.target.value)}
                style={{margin: '0 10px'}}
                id="stroke-width"
                type='color'  />
            <label htmlFor="stroke-color">Заливка</label>
            <input
                onChange={e => toolState.setStrokeColor(e.target.value)}
                style={{margin: '0 10px'}}
                id="stroke-width"
                type='checkbox'  />
        </div>
    );
};

export default SettingBar;