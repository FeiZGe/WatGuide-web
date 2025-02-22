import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";

interface menuProps {
    path?: string;
    icon: IconDefinition;
    bg?: string; 
}

const Menulink = ({ path = "#", icon, bg }: menuProps) => {
  return (
    <Link 
        href={path}
        className={clsx(
            "p-2 w-full h-full flex justify-center items-center rounded-md hover:text-slate-500 transition-all duration-300 ease-in-out hover:scale-110",
            bg ? bg : "bg-slate-100 hover:bg-slate-300/50 bg-opacity-10 backdrop-blur-sm text-slate-700"
        )}
    >
        <FontAwesomeIcon icon={icon} className="w-6 h-6" />
    </Link>
  )
}

export default Menulink
