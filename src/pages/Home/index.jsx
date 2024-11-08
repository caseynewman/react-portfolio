import './style.css'
import React from "react";
import Hero from "../../components/Hero";
import AboutSection from "../../components/AboutSection";
import FeaturedWork from "../../components/FeaturedSection";


export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <FeaturedWork />
        </>
    )
}