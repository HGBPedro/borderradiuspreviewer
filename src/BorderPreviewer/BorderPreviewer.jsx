import React, { useState } from 'react'

function BorderPreviewer() {
  const [borderOne, setBorderOne] = useState('')
  const [borderTwo, setBorderTwo] = useState('')
  const [borderThree, setBorderThree] = useState('')
  const [borderFour, setBorderFour] = useState('')

  return (
    <div className='container'>
      <header className='header'>
        <h2>CSS Border-radius Previewer</h2>
      </header>

      <div className='content'>
        <div className='inputs-container'>
          <div className='config-group left-side top-side'>
            <span className='group-title'>Top left</span>
            <input className='border-input' type="text" onChange={(event) => setBorderOne(event.target.value)}/>
          </div>
          <div className='config-group left-side bottom-side'>
            <span className='group-title'>Bottom left</span>
            <input className='border-input' type="text" onChange={(event) => setBorderTwo(event.target.value)}/>
          </div>
          <div className='config-group right-side top-side'>
            <span className='group-title'>Top right</span>
            <input className='border-input' type="text" onChange={(event) => setBorderThree(event.target.value)}/>
          </div>
          <div className='config-group right-side bottom-side'>
            <span className='group-title'>Bottom right</span>
            <input className='border-input' type="text" onChange={(event) => setBorderFour(event.target.value)}/>
          </div>
        </div>

        <div className='preview'>
          <code className='code'>
            <p>.class-example {'{'}</p>
            <p className='p-10'>border-top-left-radius: {borderOne}px;</p>
            <p className='p-10'>border-bottom-left-radius: {borderTwo}px;</p>
            <p className='p-10'>border-top-right-radius: {borderThree}px;</p>
            <p className='p-10'>border-bottom-right-radius: {borderFour}px;</p>
            <p>{'}'}</p>
          </code>
        </div>
      </div>
    </div>
  )
}

export default BorderPreviewer