"use client";
import { useParams } from "next/navigation";

const HotelItem = () => {
  const params = useParams();
  return (
    <div>
      <p>HotelItem page</p>
      <p>ID: { params.hotelID }</p>
    </div>
  )
}

export default HotelItem

