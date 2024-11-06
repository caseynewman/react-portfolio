import './style.css';
import { Center, Image, TagRightIcon } from '@chakra-ui/react';

export default function AboutSection() {
    return (
        <section className="about">
            <div className='casey-headshot'>
            <Image
                    // borderRadius='full'
                    boxSize='250px'
                    padding={5}
                    src='/assets/casey-newman.jpg'
                    alt='Casey Newman'
                />
            </div>
            <h2><span className='underline'>Hey there,</span><br />
                I'm Casey!</h2>
            <article className='about-section-info'>
                <p>
                    I'm a web developer, writer, and yoga teacher based in Wilmington, NC. I have a BA in Communication Studies + a Master of Letters in Creative Writing from the University of Stirling in Scotland. I also have a technical certification in Full Stack Web Development from UNC Chapel Hill.
                    <br /><br />
                    With a background in both wellness and professional writing, I strive for a holistic approach to brand growth and sustainability through development, content, and design.
                </p>
            </article>
        </section>
    )
}