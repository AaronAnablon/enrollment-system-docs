import Link from "next/link";
import { GrPrevious } from "react-icons/gr"; 

const Previousbutton = ({link, name}) => {
    return (
        <div className="flex flex-col">
        <p className="text-gray-500 text-sm">Previous</p>
        <Link href={link} download>
            <button className="flex text-black text-md justify-center gap-3 items-center"><GrPrevious /> {name}</button>
        </Link>
    </div>
    );
}

export default Previousbutton;