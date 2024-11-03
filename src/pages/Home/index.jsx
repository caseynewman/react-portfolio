import React from "react";
import Hero from '../Hero';
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import './style.css'


export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Portfolio />
            <Resume />
        </>
    )
}