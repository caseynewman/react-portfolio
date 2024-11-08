import './style.css';

export default function FeaturedWork() {
    return (
        <section className='featured-container'>
            <div className='featured-header'>
                <h2><span className='underline'>Full-Stack + Frontend Applications</span><br />Featured Work</h2>
            </div>
            <article className='featured-work'>
                <img src='/assets/bubble-app.png'
                alt='Bubble App'></img>
                <img src='/assets/quiet-soul-homepage.png'
                alt='Quiet Soul App'></img>
                <img src='/assets/weather-dashboard-screenshot.png'
                alt='Weather Dashboard'></img>
            </article>
        </section>
    )
}