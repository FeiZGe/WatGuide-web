import Card from '@/components/Card'
import React from 'react'

const Hotel = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
      <Card img="/image/test.png" path="/map/hotel" title="Hello" detail="ahahahhaasa" />
      <Card img="/image/test.png" path="/map/hotel" title="Hello" detail="lorsakmdmskmxksamk maskdms akdmmxak msax " />
      <Card img="/image/test.png" path="/map/hotel" title="Hello" detail="ahahahhaasa" />
    </div>
  )
}

export default Hotel
