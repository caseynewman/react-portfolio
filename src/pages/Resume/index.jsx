import MyButton from '../../components/Button';
import './style.css'

export default function Resume() {
  return (
    <section className='resume'>
      <h1>resume</h1>
      <div className="resume-content">
        <h2>Skills + Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>SQL</li>
          <li>Mongoose</li>
          <li>MongoDB</li>
        </ul>
        <p>Click below to view my resume.</p>
        <MyButton href='/assets/casey-newman-resume.png' target='_blank'>Download Resume
        </MyButton>
      </div>
    </section>
  );
}
