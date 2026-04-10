import Navigationbar from '../../component/navigationbar'
import './dashboard.css'
import { useState, useEffect } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'



function Dashboard() {
  const [Issues, setIssues] = useState([])
  const [Loading, setLoading] = useState(true)
  const [Error, setError] = useState(null)

  const navigate = useNavigate()



  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const responseissue = await api.get("/issues")
        console.log(responseissue.data.issues)
        setIssues(responseissue.data.issues)

      } catch (error) {
        console.log(error)
        setError(error.message)
      }
      finally {
        setLoading(false)
      }

    }
    fetchIssues()
  }, [])

  function navtoaddnew(){
    navigate('/addissue')
  }

  return (
    <div className='dashboard-main-cont'>

      <div className='dashboard-header'>
        <h2>HOME</h2>
        <div className='welco-logout'>
          <p className='welcome-text-dashboard'>Welcome {JSON.parse(localStorage.getItem('user')).name}</p>
          <button className='logout-btn'>LOGOUT</button>
        </div>
      </div>

      <button className='add-new-button' onClick={navtoaddnew}>ADD NEW</button>

      <div>

      


    

      {Loading && <p>Loading...</p>}
      {Error && <p>Error: {Error}</p>}

      {!Loading && !Error && Issues.length > 0 && (
        Issues?.map((Issue) => {
          return (
            <div className='grid-boxes'>
              <div key={Issue._id} className='card'>
                <div className='box-left-side'>
                  <h2>{Issue.title}</h2>
                  <p>{Issue.location}</p>
                  <button className='view-de-dashboard'>View Details</button>
                </div>
                <div>
                  <img src={Issue.image} alt={Issue.title} />
                </div>
                
              </div>
            </div>
          )
        })
      )}
    
    </div>
    </div>
  )
}

export default Dashboard
