import React, { useState, useEffect } from "react";
import Item from "./item";
import { toast } from "react-toastify";
import Toast from "./toast";
const { randomHexColor } = require('random-hex-color-generator');

function paletteArrayGenerator(arrayLength) {
    return Array.from({ length: arrayLength }, randomHexColor);
} // creates an array of hex codes with the given length.



export default function Main() {
    const [colors, setColors] = useState(paletteArrayGenerator(5));
    const [copiedHex, setCopiedHex] = useState(null);
    // const [isCPressed, setIsCPressed] = useState(false);

    function clcHndlr() {
        setColors(paletteArrayGenerator(5));
    }

    function copyToClipboard(e) {
        if (e.target.tagName == 'LI') {
            navigator.clipboard.writeText(e.target.nextElementSibling.textContent);
            setCopiedHex(e.target.nextElementSibling.textContent);
        } else {
            navigator.clipboard.writeText(e.target.innerText);
            setCopiedHex(e.target.innerText);
        }
    }



    useEffect(() => {
        if (copiedHex) {
            toast['success'](`copied to the clipboard: ${copiedHex} 🤟`);
        }

    }, [copiedHex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'c' || e.key === 'C') {
                navigator.clipboard.writeText(colors.join(','));
                toast['success'](`copied all colors: ${colors.join(' ')}`);
            } else if (e.code === 'Space') {
                e.preventDefault();
                clcHndlr();
                toast['success']('Generated new Palette 🚀')
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [colors]);

    return (
        <div className="container">
            <h1> Color Palette Generator</h1>

            <div className="palette-div">
                <ul>
                    {colors.map((color, i) => <Item color={color} key={i} copyHandler={copyToClipboard} />)}
                </ul>

            </div>

            <div className="bottom-div">
                <button onClick={clcHndlr}>Genarate random palette</button>
            </div>

            <p className="guide">press <span>C</span> to copy all Palette and <span>Spacebar</span> to generate new Palette</p>

            <Toast />
        </div >
    )

}