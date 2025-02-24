"use client";

import NCard from "@/components/NCard"
import prays from "@/utils/prayData"

const Event = () => {
  return (
    <div className="columns-1 sm:columns-2 gap-3 space-y-3">
      {prays.map((num) => (
        <NCard 
          key={num.id} 
          img={`/image/pray/${num.id}.jpg`}
          title={num.name} 
          detail={num.description}
          />
      ))}
    </div>
  )
}

export default Event
