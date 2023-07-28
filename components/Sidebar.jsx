"use client"
import Link from 'next/link'

const Sidebar = () => {

    return (
        <div className="h-screen sticky top-0 flex flex-col w-full">
            <Link href={'/'}><h2 className="text-4xl text-white p-4 bg-gray-800">Enrollment System Documentation</h2></Link>
            <div className='p-4 flex flex-col text-bold text-xl border-r-2 text-gray-800 gap-4 '>
                <Link className={`hover:text-black`} href={'/pages/introduction'}>Introduction</Link>
                <Link className={`hover:text-black`} href={'/pages/installation'}>Installation</Link>
                <Link className={`hover:text-black`} href={'/pages/scope'}>Scope and Delimitation</Link>
                <Link className={`hover:text-black`} href={'/pages/login'}>Get started</Link>
                <Link className={`hover:text-black`} href={'/pages/new'}>New Student Record Page</Link>
                <Link className={`hover:text-black`} href={'/pages/assign'}>Assign Section Page</Link>
                <Link className={`hover:text-black`} href={'/pages/grade'}>Grade Page</Link>
                <Link className={`hover:text-black`} href={'/pages/print'}>Print Card</Link>
                <Link className={`hover:text-black`} href={'/pages/sms'}>SMS</Link>
                <Link href='https://aaron-anablon.vercel.app/'
                    target="_blank" rel="noopener noreferrer"
                    className="fixed hover:text-black bottom-0">About Developer</Link>
            </div>
        </div>
    );
}

export default Sidebar;