import './App.css'
import Header from './components/header.jsx'
import Profile from './components/profile.jsx'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="profiles">
        <Profile
          name="Alex"
          role="AI Engineer"
          bio="Building intelligent systems."
          skills="Python • AI • React"
        />

        <Profile
          name="Maya"
          role="Product Designer"
          bio="Designing tools people love."
          skills="UI • UX • Figma"
        />

        <Profile
          name="Rahul"
          role="Full Stack Developer"
          bio="Building modern web apps."
          skills="React • Node.js • PostgreSQL"
        />
      </div>
    </div>
  )
}

export default App