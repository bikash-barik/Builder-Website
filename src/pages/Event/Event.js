import React from 'react'
import PastEvents from '../../components/Event/PastEvents'
import UpcomingEvents from '../../components/Event/UpcomigEvents'
import './Eventmain.css'

export default function Event() {
  return (
    <div className="Event_Page">
        <UpcomingEvents/>
        <PastEvents/>
    </div>
  )
}
