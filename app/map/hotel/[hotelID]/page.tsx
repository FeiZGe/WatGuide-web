"use client"; // บังคับให้เป็น Client Component
import { useParams } from "next/navigation";

const Hotel = () => {
  const params = useParams();
  return (
    <div>
      <p>Hotel page</p>
      <p>ID: { params.hotelID }</p>
    </div>
  )
}

export default Hotel

