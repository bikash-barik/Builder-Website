import React from 'react'
import PastEvents from '../../components/Event/PastEvents'
import UpcomingEvents from '../../components/Event/UpcomigEvents'

export default function Event() {
  return (
    <div>
        <UpcomingEvents/>
        <PastEvents/>
    </div>
  )
}
