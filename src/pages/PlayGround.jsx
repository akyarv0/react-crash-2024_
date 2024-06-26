import React from 'react'
import Todo from '../components/practice/Todo'
import MouseEvents from '../components/practice/MouseEvents'

const PlayGround = () => {
  return (
    <div className='flex justify-start items-center h-screen flex-col'>
     
        <Todo />

        <MouseEvents />

    </div>
  )
}

export default PlayGround