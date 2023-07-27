import React from 'react'

import { Counter } from "mf_counter/Counter"
import Error from '../components/Error'

export const HomePage = () => {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-lg'>Counter MF</h1>
      <Error>
        <Counter  />
      </Error>
    </div>
  )
}
