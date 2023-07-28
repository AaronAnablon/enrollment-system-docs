import Link from "next/link";
import { GrNext } from "react-icons/gr";

const Nextbutton = ({link, name}) => {
    return (
        <div className="flex flex-col">
        <p className="text-gray-500 text-sm">Next</p>
        <Link href={link}>
            <button className="flex text-black text-md justify-center gap-3 items-center">{name} <GrNext size={13}/></button>
        </Link>
    </div>
    );
}

export default Nextbutton;