import React from 'react'

export default function CountriesToShow({theCountry: {selectedCountries, travels}}) {
  // console.log('travels', travels);
  return (
    <div>
        {selectedCountries.map((country) => {
          return(
          <div>
            {/* {country} */}
          </div>

          )
          })}
    </div>
  )
}
