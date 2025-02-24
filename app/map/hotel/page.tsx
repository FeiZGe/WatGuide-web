import Card from '@/components/Card'
import hotels from "@/utils/hotelData"

const Hotel = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
      {hotels.map((num) => (
        <Card 
          key={num.id} 
          img={`/image/hotel/${num.id}.jpg`}
          path={`/map/hotel/${num.id}`} 
          title={num.name_th} 
          detail={num.price}
          rate={num.rating} />
      ))}
    </div>
  )
}

export default Hotel
