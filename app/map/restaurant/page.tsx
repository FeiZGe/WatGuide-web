import Card from '@/components/Card'
import restaurants from '@/utils/resData'

const Restaurant = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
      {restaurants.map((num) => (
        <Card 
          key={num.id} 
          img={`/image/res/${num.id}.jpg`}
          path={`/map/restaurant/${num.id}`} 
          title={num.name} 
          detail={num.typefood}
          rate={num.rating} />
      ))}
    </div>
  )
}

export default Restaurant
