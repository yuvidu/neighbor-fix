import React from 'react'
import './landing.css'

function landing() {
  return (
    <div className='landingmainbackground'>

        <h2>
            Report neighborhood problems. Fix them together
        </h2>

        <div className='stepboxes-land'>
            <div className='box-background'>
                <h3>Report</h3>
            </div>
            <div className='box-background-2'>
                <h3>Vote</h3>
            </div>
            <div className='box-background-3'>
                <h3>fix</h3>
            </div>
        </div>

        <button className='landing-start-buttons' onClick={() => window.location.href = '/login'}>Start</button>
      
    </div>
  )
}

export default landing
