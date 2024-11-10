import './style.css';
import MyButton from '../Button';

export default function FeaturedWork() {
    return (
        <section className='featured-container'>
            <div className='featured-header'>
                <h2><span className='underline'>Full-Stack + Frontend Applications</span><br />Featured Work</h2>
            </div>
            <article className='featured-work'>
                <div className='image-container'>
                    <img src='/assets/bubble-app.png'
                        alt='Bubble App'></img>
                    <img src='/assets/quiet-soul-homepage.png'
                        alt='Quiet Soul App'></img>
                    <img src='/assets/weather-dashboard-screenshot.png'
                        alt='Weather Dashboard'></img>
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