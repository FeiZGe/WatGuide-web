import WatMap from "@/components/WatMap"
import { faLocationDot, faTrainSubway } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Map = () => {
  return (
    <div>
      <div className="relative z-0 mb-5">
        <WatMap />
      </div>

      <div className="flex flex-row gap-2 items-start w-full">
        <div className="flex flex-row items-center gap-1 w-16 min-w-16">
          <FontAwesomeIcon icon={faLocationDot} />
          <h4 className="font-semibold text-nowrap">ที่ตั้ง</h4>
        </div>
        <p className="text-pretty">27 ถนนเทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000</p>
      </div>

      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-row items-center gap-1 w-16">
          <FontAwesomeIcon icon={faTrainSubway} />
          <h4 className="font-semibold text-nowrap">รถไฟ</h4>
        </div>
        <p>สถานีนครปฐม</p>
      </div>

    </div>
  )
}

export default Map
