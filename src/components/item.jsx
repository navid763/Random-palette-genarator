import React from "react";

export default function Item({ color, copyHandler }) {
    return (
        <div className="item-div" onClick={copyHandler}>
            <li className="item" style={{ background: color }}></li>
            <p>{color}</p>
        </div>
    )
}