import Sidebar from "./Sidebar";
import remarks from "../data/remarks";
import Image from "next/image";
import Nextbutton from "./Nextbutton";

const Layout = ({ children }) => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1 ">
                <Sidebar />
            </div>
            <div className="col-span-3 mx-8">{children ? children :
                <div className="flex flex-col mt-10"><h2 className="text-4xl indent-4">{remarks.header}</h2>
                    <div className="indent-6 m-10">{remarks.body}</div>
                   <div className="flex justify-end m-10">
                    <Nextbutton link='/pages/introduction' name='Introduction'/>
                   </div>
                    <div className="flex flex-col items-center">
                        <Image src={remarks.pic1} alt='pic1' />
                        <Image src={remarks.pic2} alt='pic2' />
                        <Image src={remarks.pic3} alt='pic3' />
                        <Image src={remarks.pic4} alt='pic4' />
                    </div>
                    <div className="flex justify-end ">

                    </div>
                </div>

            }
            </div>

        </div>
    );
}

export default Layout;