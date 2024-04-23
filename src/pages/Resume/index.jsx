import './style.css'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
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
        <p>Check out my resume for more information!</p>
        <button>
          <a href='/assets/casey-newman-resume.png' target='_blank'>Download Resume</a>
        </button>
      </div>
    </div>
  );
}
