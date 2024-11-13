import './style.css';
import { Image } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
    const { ref: headingRef, inView: headingIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const { ref: imageRef, inView: imageIsVisible } = useInView({
        triggerOnce: true,
    });

    return (
        <section className="about-container">
            <div className='about-header'>
                    <h2 ref={headingRef} className={headingIsVisible ? 'heading-scroll' : 'hidden'}><span className='underline'>Hey there,</span><br /> I'm Casey!</h2>
                <Image ref={imageRef} className={imageIsVisible ? 'image-fade-in' : 'hidden'}
                    boxSize='250px'
                    padding={0}
                    src='/assets/casey-newman.jpg'
                    alt='Casey Newman'
                />
            </div>
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