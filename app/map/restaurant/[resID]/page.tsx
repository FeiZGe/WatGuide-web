"use client";

import { useParams } from "next/navigation";

const RestaurantItem = () => {
  const params = useParams()
  return (
    <div>
      Restaurant ID: {params.resID}
    </div>
  )
}

export default RestaurantItem
