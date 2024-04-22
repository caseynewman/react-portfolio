import Form from '../../components/Form'
import './style.css'

export default function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <div className='contact-info'>
                <p>
                    <b>email:</b> casey.n.newman@gmail.com<br />
                    <b>phone:</b> 919.272.1817
                </p>
            </div>
            <Form />
        </div>
    );
}
