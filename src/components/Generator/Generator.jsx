import React from 'react'
import './Generator.scss'
import Display from '../Display/Display'


export default function Generator() {
  

  return (
    <div className='generator'>
      <div className="inputField">
        <input type="text" placeholder='Enter top text' className="topText"/>
        <input type="text" placeholder='Enter bottom text' className="bottomText"/>
      </div>
      <p className='generateBtn'>Get a new meme image  🖼</p>

      <Display/>
    </div>
  )
}
