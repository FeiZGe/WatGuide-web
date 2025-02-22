import Menulink from "./Menulink"
import { faHome, faBook, faMapLocationDot, faTicket, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons"


const Dockbar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-300 bg-opacity-30 backdrop-blur-md max-w-80 w-4/5 h-14 rounded-lg shadow-lg">
      <div className="flex flex-row gap-2 p-2 justify-between items-center h-full">
        <Menulink icon={faHome} />
        <Menulink icon={faBook} />
        <Menulink icon={faWandMagicSparkles} bg="bg-gradient-to-br from-amber-500 to-red-500 text-slate-200" />
        <Menulink icon={faMapLocationDot} />
        <Menulink icon={faTicket} />
      </div>
    </div>
  )
}

export default Dockbar
