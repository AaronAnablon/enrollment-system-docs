"use client"
import Link from 'next/link'
import links from '../data/links';

const Sidebar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col w-full">
            <Link href={'/'}><h2 className="text-4xl text-white p-4 bg-gray-800">Enrollment System Documentation</h2></Link>
            <div className='p-4 flex flex-col text-bold text-xl border-r-2 text-gray-800 gap-4 '>
                {links.map((link, index) => (
                    <div key={index}>
                        <Link className={`hover:text-black`} href={link.route}>
                            {link.title}
                        </Link>
                    </div>
                ))}
                <Link href='https://aaron-anablon.vercel.app/'
                    target="_blank" rel="noopener noreferrer"
                    className="fixed hover:text-black bottom-0">About Developer</Link>
            </div>
        </div>
    );
}

export default Sidebar;