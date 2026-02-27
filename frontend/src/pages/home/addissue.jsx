import React, { useState } from 'react'
import './addissue.css'
import api from '../../api'

function addissue() {

  const [formdata, setformdata] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    location: '',
    mapCoordinates: '',
    status: '',
    createdBy: ''
  })

  const onsubmit = (e) => {

    e.preventDefault()
    try {
      console.log(formdata)
      api.post('/issues', formdata)
      setformdata({
        title: '',
        description: '',
        category: '',
        image: '',
        location: '',
        mapCoordinates: '',
        status: '',
        createdBy: ''
      })
      alert('Issue added successfully')
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

  return (
    <div className="add-issue-container">
      <h1>Add Issue</h1>
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
          <input type="text" name='category' value={formdata.category} onChange={onchange} />
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
          <input type="text" name='mapCoordinates' value={formdata.mapCoordinates} onChange={onchange} />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input type="text" name='status' value={formdata.status} onChange={onchange} />
        </div>
        <div className="form-group">
          <label>Created By</label>
          <input type="text" name='createdBy' value={formdata.createdBy} onChange={onchange} />
        </div>
        <button type='submit' className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default addissue
