"use client";
import { useParams } from "next/navigation";

const DestinyCard = () => {
    const params = useParams();

  return (
    <div>
      ใบที่: {params.cardID}
    </div>
  )
}

export default DestinyCard
