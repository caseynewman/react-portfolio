import { Outlet } from 'react-router-dom';
import Title from './components/Title';
import Nav from './components/NavTabs';
import './App.css'

function App() {
  return (
    <>
      <header>
        <Title />
        <Nav />
        {/* name, about me, portfolio, contact, resume // current section title highlighted */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* footer content */}
      </footer>
    </>
  )
}

export default App
