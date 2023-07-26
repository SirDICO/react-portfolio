
import './index.css';
import './App.css';
import {About, Blog, Contact, Home, Pricing, Portfolio, Resume, Testimonial, Sidebar, Services} from './components'


function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      {/* <Resume/> */}
      <Portfolio/>
      {/* <Pricing/> */}
      {/* <Testimonial/> */}
      <Blog/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
