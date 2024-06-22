"use client"
import React, { useState } from 'react'
import RecomendationsSearch from './RecomendationsSearch'

const FormsName = () => {
  const [name, setName] = useState('')
  const [statusSearch, setStatusSearch] = useState(true)

  const retrieveData = ()=>{
    
  }

  return (
    <form action="/" className="flex flex-col">
      <section className="flex flex-col">
        <label htmlFor="name" >Try full name</label>
        <input
          type="text"
          onKeyUp={() => console.log('esccribiendo')}
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="write your name ..." id="name" />
      </section>
      {statusSearch ? (<RecomendationsSearch retrieveData />) : <></>}
    </form>
  )
}

export default FormsName