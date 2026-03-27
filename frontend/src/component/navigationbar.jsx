import './nav.css'

function Navigationbar() {
  return (
    <div>
      <nav className='topsection'>
        <ul className='nav-list'>
          <li><a href="/">Home</a></li>
          <li><a href="/addissue">Add Issue</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigationbar