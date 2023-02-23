import React from 'react'
import resume from '../Assets/dyaaResume.pdf'

const callToAction = () => {
  return (
    <div className='cta'>
      <a href = {resume} download className='btn-head'> Download Resume. </a>
      <a href="#con" className='btn-head btn-primary'> Let's Talk. </a>
    </div>
  )
}

export default callToAction
