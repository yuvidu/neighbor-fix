import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './addissue.css'
import api from '../../api'
import Navigationbar from '../../component/navigationbar'
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 7.8731,
  lng: 80.7718
};

function AddIssue() {

  const navigate = useNavigate();



  const [formdata, setformdata] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    location: '',
    mapcoordinates: null,
    status: 'Pending',
    createdBy: ''
  })

  const onsubmit = (e) => {

    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const response = api.post('/issues', formdata, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setformdata({
        title: '',
        description: '',
        category: '',
        image: '',
        location: '',
        mapcoordinates: null,
        status: '',
        createdBy: ''
      })
      if (response.data.success) {
        alert('Issue added successfully')
      }
      else {
        alert('Failed to add issue')
      }
      console.log(response.data)
    } catch (error) {
      console.log(error)
      alert('Failed to add issue')
    }

  }

  const onchange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setformdata({
      ...formdata,
      [e.target.name]: value
    })
  }

  const handlemapclick = (e) => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    setformdata({
      ...formdata,
      mapcoordinates: { lat, lng }
    })
  }

  function navbacktohome (){
    navigate("/dashboard")

  }

  return (
    <div className='addisse-main'>
      <div className='topsection-addissue'>
        <h2 className='addnewcasetitle'>Add new case</h2>
        <button className='navback' onClick={navbacktohome}>back</button>
      </div>
      

      <div className="add-issue-container">
        <form onSubmit={onsubmit} className="add-issue-form">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name='title' value={formdata.title} onChange={onchange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" name='description' value={formdata.description} onChange={onchange} />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name='category'
              value={formdata.category}
              onChange={onchange}
            >
              <option value="">Select Category</option>
              <option value="Garbage">Garbage</option>
              <option value="Electricity">Electricity</option>
              <option value="Road">Road</option>
              <option value="Streetlight">Streetlight</option>
              <option value="Noise">Noise</option>
              <option value="Flood">Flood</option>
              <option value="Other">Other</option>

            </select>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input type="text" name='image' value={formdata.image} onChange={onchange} />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" name='location' value={formdata.location} onChange={onchange} />
          </div>
          <div className="form-group">
            <label>Map Coordinates</label>
            <LoadScript googleMapsApiKey="AIzaSyC2mCZGcRDTaZJd9WYjAjxWDFAPkkbYyik">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onClick={handlemapclick}
              >

                {formdata.mapcoordinates && (
                  <Marker position={formdata.mapcoordinates} />
                )}
              </GoogleMap>

            </LoadScript>
          </div>
          <button type='submit' className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddIssue
