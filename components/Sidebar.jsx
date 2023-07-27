import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="h-screen sticky top-0 flex flex-col w-full">
            <Link href={'/'}><h2 className="text-4xl text-white p-4 bg-gray-800">Enrollment System Documentation</h2></Link>
            <div className='p-4 flex flex-col text-bold text-xl border-r-2 text-gray-800 gap-4 '>
                <Link href={'/pages/installation'}>Installation</Link>
                <Link href={'/pages/introduction'}>Introduction</Link>
                <Link href={'/pages/scope'}>Scope and Delimitaion</Link>
                <Link href={'/pages/technical'}>Technical Background</Link>
                <Link href={'/pages/login'}>Log-in Form</Link>
                <Link href={'/pages/new'}>New Student Record Form</Link>
                <Link href={'/pages/assign'}>Assign Section Form</Link>
                <Link href={'/pages/grade'}>Grade Form</Link>
                <Link href={'/pages/print'}>Print Card</Link>
                <Link href={'/pages/sms'}>SMS</Link>
                <Link href='https://aaron-anablon.vercel.app/'
                    target="_blank" rel="noopener noreferrer"
                    className="fixed bottom-0">About Developer</Link>
            </div>
        </div>
    );
}

export default Sidebar;