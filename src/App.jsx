import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from './components/servicecard.jsx'

function App() {
  

  return (
    <>
    <div>
      <h1>Services</h1>
      <ServiceCard title="Web Development" description="We build websites and web applications using a variety of technologies." />
      <ServiceCard title="Mobile Development" description="We build mobile applications for iOS and Android using React Native." />
    </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FSWD CA1 CREATED USING REACT WITH VITE</h1>

    </>
  )
}

export default App
