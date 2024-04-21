import { Outlet } from 'react-router-dom';
import Header from './components/site-header/Header';
import './App.css'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header>
        <Header />
        {/* name, about me, portfolio, contact, resume // current section title highlighted */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
