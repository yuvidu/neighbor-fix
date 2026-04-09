import Navigationbar from '../../component/navigationbar'
import './dashboard.css'
import { useState, useEffect } from 'react'
import api from '../../api'



function Dashboard() {
  const [Issues, setIssues] = useState([])
  const [Loading, setLoading] = useState(true)
  const [Error, setError] = useState(null)



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

  return (
    <div className='dashboard-main-cont'>
      <Navigationbar />

    

      {Loading && <p>Loading...</p>}
      {Error && <p>Error: {Error}</p>}

      {!Loading && !Error && Issues.length > 0 && (
        Issues?.map((Issue) => {
          return (
            <div className='grid-boxes'>
              <div key={Issue._id} className='card'>
                <h2>{Issue.title}</h2>
                <p>{Issue.category}</p>
                <p>{Issue.description}</p>
                <p>{Issue.status}</p>
              </div>
            </div>
          )
        })
      )}
    
    </div>
  )
}

export default Dashboard
