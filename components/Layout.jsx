"use client"
import Sidebar from "./Sidebar";
import remarks from "../data/remarks";
import Image from "next/image";
import Nextbutton from "./Nextbutton";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Layout = ({ children }) => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }
    return (
        <div className="grid grid-cols-4 block">
            <div className="fixed top-0 lg:hidden w-screen block bg-gray-800 z-10">
                <div onClick={handleClick} className="m-4 text-white"><GiHamburgerMenu size={32} /></div>
            </div>
            <div className={`lg:col-span-1 lg:block ${!menu ? 'hidden' : 'fixed top-0 z-50 bg-white'} col-span-4`}>
                <Sidebar handleClick={handleClick} menu={menu} />
            </div>
            <div className="lg:col-span-3 lg:mt-0 mt-16 col-span-4 lg:mx-8 mx-2">{children ? children :
                <div className="flex flex-col mt-10"><h2 className="text-4xl indent-4">{remarks.header}</h2>
                    <div className="indent-6 m-10">{remarks.body}</div>
                    <div className="flex justify-end m-10">
                        <Nextbutton link='/pages/introduction' name='Introduction' />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src={remarks.pic1}
                            alt="pic1"
                            width={100} 
                            height={100} 
                            className="rounded-full border-2 border-white"
                        />
                        <Image
                            src={remarks.pic2}
                            alt="pic2"
                            width={100} 
                            height={100} 
                            className="rounded-full border-2 border-white"
                        />
                        <Image
                            src={remarks.pic3}
                            alt="pic3"
                            width={100} 
                            height={100} 
                            className="rounded-full border-2 border-white"
                        />
                        <Image
                            src={remarks.pic4}
                            alt="pic4"
                            width={100} 
                            height={100} 
                            className="rounded-full border-2 border-white"
                        />
                    </div>
                </div>
            }
            </div>

        </div>
    );
}

export default Layout;