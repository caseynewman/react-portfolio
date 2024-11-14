import './style.css';
import MyButton from '../Button';
import { Image } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

export default function FeaturedWork() {
    const { ref: headingRef, inView: headingIsVisible } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const { ref: imageRef, inView: imageIsVisible } = useInView({
        triggerOnce: true,
    });

    return (
        <section className='featured-container'>
            <div className='featured-header'>
                <h2 ref={headingRef} className={headingIsVisible ? 'heading-scroll' : 'hidden'}><span className='underline'>Full-Stack + Frontend Applications</span><br />Featured Work</h2>
            </div>
            <article className='featured-work'>
                <div className='image-container'>
                    <Image src='/assets/bubble-app.png'
                        alt='Bubble App'/>
                    <Image src='/assets/quiet-soul-homepage.png'
                        alt='Quiet Soul App'/>
                    <Image src='/assets/weather-dashboard-screenshot.png'
                        alt='Weather Dashboard'/>
                </div>
                <div className='portfolio-btn-container'>
                    <MyButton>
                        <a href='/portfolio' target='_blank'>View Portfolio</a>
                    </MyButton>
                </div>
            </article>
        </section>
    )
}