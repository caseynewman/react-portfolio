import React from "react";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import './style.css'


export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <Portfolio />
            <Resume />
        </>
    )
}