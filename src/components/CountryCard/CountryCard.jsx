import React, { useEffect, useState } from 'react'

const CountryCard = ({flag, name}) => {

  return (
    <div className='country-card'> 
        <img src={flag} alt="flag" />
        <h2 className='flag-name'>{name}</h2>
    </div>
  )
}

export default CountryCard