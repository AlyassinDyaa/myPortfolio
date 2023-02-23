import React from 'react'
import resume from '../Assets/dyaaResume.pdf'

const callToAction = () => {
  return (
    <div className='cta'>
      <a href = {resume} download className='btn'> Download Resume. </a>
      <a href="#con" className='btn btn-primary'> Let's Talk. </a>
    </div>
  )
}

export default callToAction
