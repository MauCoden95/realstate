import React from 'react'
import { ShowDataProperty } from '@/app/components/ShowDataProperty'

export default function page ({params}) {

  const { id } = params;

  return (
    <div className='px-14'>
        <ShowDataProperty id={id}/>
    </div>
  )
}
