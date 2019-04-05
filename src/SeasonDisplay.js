import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}
const seasonConfig = {
  summer: { text: 'Yay, ab an den Strand!', icon: 'sun' },
  winter: { text: 'Brrr, schnell vor den Kamin!', icon: 'snowflake' }
}

const SeasonDisplay = props => {
  const { lat, month } = props
  const season = getSeason(lat, month)
  const { text, icon } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`${icon} icon icon-left massive`} />
      <h1>{text}</h1>
      <i className={`${icon} icon icon-right massive`} />
    </div>
  )
}

export default SeasonDisplay
