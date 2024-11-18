import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
        <header>
          <Header />
        </header>
        <main>
          <ScrollToTop />
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default App
