import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import './style.css'


export default function Home() {
    return (
        <>
            <About />
            <Portfolio />
            <Resume />
        </>
    )
}